const express = require('express');
const router = express.Router();
const setupUser = require('../Model/setupDb')
router.get('/setupUserDB',(req,res,next)=>{
    setupUser.setupDb().then((data) => {
            console.log(data);
            res.send(data)
        }).catch((err) => {
            next(err)
        })
})

router.get("/", (req, res, next) => {
    res.send({message:"hello ,wolcome to login serviece"})
})

module.exports = router;