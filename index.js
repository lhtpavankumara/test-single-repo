const APP = require('express')

const app = new APP()
// require('./config/express')(app)
// global.lhtWebLog = Utils.lhtLog
const PORT= 3006

// app.listen(PORT)
console.log(app.listen(PORT))
// routes(app)
