const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((students) => {
        res.end(students);
      }).catch((error) => {
        res.end(error.message);
      });
  }
  res.end();
});

app.listen(1245);

module.exports = app;
