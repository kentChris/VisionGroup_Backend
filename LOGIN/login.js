const jwt = require('jsonwebtoken');
const data = require('../Data');


module.exports = function(app){

    app.post('/api/login', async (req,res)=>{
        const body = req.body;

        if(!body.username || !body.password || typeof body.username !== 'string' || typeof body.password !== 'string')
            return res.status(400).send({code:400, message: 'Bad Request Error'});          
        
        const user = data.filter(user=> user.username == body.username && user.password === body.password);

        if(!user[0])
            return res.status(401).send({code: 401, message: 'Unauthorized Error'});

        const token = jwt.sign(user[0], process.env.SECRET_KEY, {expiresIn: '1m'});
        return res.status(200).send({code:200, token: token});        
    })
}