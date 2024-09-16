const path = require('path')

console.log(path.sep)

const join = path.join(__dirname,'app.js')

console.log(join)

const absolute = path.resolve(join)

console.log(absolute)