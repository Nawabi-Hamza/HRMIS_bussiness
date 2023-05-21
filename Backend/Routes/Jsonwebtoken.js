const { verify } =require("jsonwebtoken")




const checkToken = (req,res,next)=>{
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
            message:"Access Denied This is Not For You Fucking Bitch This is for admin..."
        })
    }
}

const checkTokenEmpolyee = (req,res,next)=>{
    var token = req.get("Authorization")
    if(token){
        token = token.slice(7);
        verify(token,process.env.JSONWEBTOKENEMPOLYEE,(error,decoded)=>{
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
            message:"Access Denied This is Not For You Fucking Bitch..."
        })
    }
}

module.exports = { checkToken,checkTokenEmpolyee } ;
