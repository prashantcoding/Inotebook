const express = require('express')
const router=express.Router()

router.get('/', function(req, res){
    obj={
        a:"thios"
    }
    res.send(obj);
})
module.exports = router
