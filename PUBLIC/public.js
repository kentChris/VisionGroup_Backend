module.exports = function (app) {

    app.get('/api/public', async (req,res)=>{
        res.status(200).send({code: 200, message:'OK'});
    });

    app.post('/api/public', async (req,res)=>{
        res.status(200).send({code: 200, message:'OK'});
    });

    app.put('/api/public', async (req,res)=>{
        res.status(200).send({code: 200, message:'OK'});
    });

    app.delete('/api/public', async (req,res)=>{
        res.status(200).send({code: 200, message:'OK'});
    });

    app.patch('/api/public', async (req,res)=>{
        res.status(200).send({code: 200, message:'OK'});
    });
}