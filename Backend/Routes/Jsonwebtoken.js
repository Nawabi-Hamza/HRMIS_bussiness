const { verify } =require("jsonwebtoken")
module.exports = {
    checkToken : (req,res,next)=>{
        var token = req.get("Authorization")
        if(token){
            token = token.slice(7);
            verify(token,process.env.JSONWEBTOKEN,(error,decoded)=>{
                if(error){
                    res.json({
                        message:"Invalid Token"
                    })
                }else{
                    next();
                }
            })
        }else{
            res.json({
                message:"Access Denied Unauthrized Token..."
            })
        }
    }
}