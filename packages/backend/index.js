const moment = require('moment');
let now = moment();
module.exports = ()=>{
    console.log("backend", now.format("dddd, MMMM Do YYYY"));
}