module.exports = function(req, res, next){
    try{

        const requestToken = req.header('Authorization').split('Bearer ')[1];
        const expectedToken = process.env.ACCESS_TOKEN ;
        if (requestToken === expectedToken) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized: Access token mismatch' });
        }
    }
    catch(err){
        res.status(500).send(err?.message)
    }
}