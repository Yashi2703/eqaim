var prompt = require("prompt");
prompt.start();

const CalculateNumber =  async(req,res)=>{
    try{
const first = req.body.first
const second =  req.body.second
        const sum =  first + second;
        return res.json({
            data:sum,
            status:true,
            statusCode:200
        })
    }catch(err){
        const message =  err && err?err.message:"Something went wrong"
        return res.json({
            message:message,
            status:false,
        })
    }
}

module.exports = {
    CalculateNumber
}