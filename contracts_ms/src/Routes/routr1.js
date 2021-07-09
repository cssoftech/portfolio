const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send({message:"hello wolcome to Contracts serviece"})
})

module.exports = router;