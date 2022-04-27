const jwt = require('jsonwebtoken');

module.exports = function(app){

    app.get('/api/private', authenticationToken, async (req,res)=>{
        res.status(200).send({code:200, message: 'Signature is Valid', user: req.user});
    })
}

const authenticationToken = async (req, res, next) =>{
    const auth = req.header('Authorization');
    const token = auth && auth.split(' ')[1]
    if(!token)
        return res.status(403).send({code: 403, message: 'Forbidden Error'});
    
    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err)
            return res.status(403).send({code: 403, message: 'Forbidden Error'});
        
        delete user.password;
        req.user =  user;
        next();  
    })
};