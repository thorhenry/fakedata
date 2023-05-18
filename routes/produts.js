const express = require("express")
const router = express.Router()

const productData = [
    {
    _id:1,
    title:"products",
    description:"Something about the product",
    ratings: 4,
},
{
    _id:2,
    title:"products",
    description:"Something about the product",
    ratings: 4,
},
{
    _id:3,
    title:"products",
    description:"Something about the product",
    ratings: 5,
}
]

router.get("/products",(req,res)=>{
    req.setEncoding(productData)
})

module.exports = router