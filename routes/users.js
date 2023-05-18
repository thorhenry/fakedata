const express = require("express")
const router = express.Router()

router.get("/users",(req,res)=>{
    req.setEncoding("Users")
})

module.exports = router