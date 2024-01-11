const userLogin = (req,res,next)=>{
    try {
        if(req.session.userLogin){
            next()
        }else{
            res.redirect("/login")
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    userLogin
}