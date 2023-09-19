const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
app.use('/', indexRouter);
app.listen(1245);

export default app;