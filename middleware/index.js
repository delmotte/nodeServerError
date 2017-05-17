var middleware = {
    requireAuth: function(req, res, next){
        console.log("its ok!");
        next();
    }
}

module.exports = middleware;
