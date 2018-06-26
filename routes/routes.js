// /routes/routes.js
module.exports = function(app) {
    var apiControllers = require('../controllers/controllers');

    var express = require('express');
    var router = express.Router();
    var config = require('../config');

    // middleware. todo: more meaningful logging
    // and error handling
    router.use(function(req, res, next) {
        console.log(req.method + ' - ' + req.url + ' - ' + JSON.stringify(req.body));
        next();
    });
    
    // routes 

    router.route('/')
    	.get(apiControllers.doc_message);

    router.route('/patrons')
        .get(apiControllers.patron_lookup);

    app.use('/lookup', router);
};

