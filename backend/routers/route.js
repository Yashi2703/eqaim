const express=require("express")
const router=express.Router()
const sum =  require("../controllers/index")
router.post("/calculate",sum.CalculateNumber);

module.exports = 
    router
