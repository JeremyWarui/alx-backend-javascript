const http = require('http')
const countStudents = require('./3-read_file_async')

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  const { url } = req
  switch (url) {
    case '/':
      res.write('Hello Holberton School!')
      break
    case '/students':
      res.write('This is the list of our students\n')
      try {
        const students = await countStudents(process.argv[2])
        res.end(`${students.join('\n')}`)
      } catch (err) {
        res.end(err.message)
      }
      break
    default:
      res.write('Hello Holberton School!')
  }
  res.end()
})

app.listen(1245)

module.exports = app
