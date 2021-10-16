const mongoose = require('mongoose')
const mongoUrI ="mongodb://localhost:27017/Inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const db=()=>{
    mongoose.connect(mongoUrI, ()=>{
        console.log("connectToMongo Success")
    })
}
module.exports = db;