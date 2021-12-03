const router = require("express").Router();
router.get("/ping",(req,res)=>{
    res.json({Response:"Pong"});
});

router.post("/pong",(req,res)=>{
    const request= req.body;
    if(request.pong){
        res.json(request);
    }else{
        res.status(400).json({Error:"Not Allowed"});
    }
   
});
module.exports = router;