var express = require('express');
var router = express.Router();
var Log=require('../models/startuplog');

/* GET home page. */
router.get('/', function(req, res) {
  Log.getLogs(function (error, logs) {
    if (error)
        throw error;
       
    console.log('i called');    
    return res.send(logs)
},40);
});


router.route('/logs')
    .get(function (req, res) {
      Log.getLogs(function (err, logs) {
            if (err)
                return res.send({});
            return res.send(logs);
        });
});

module.exports = router;
