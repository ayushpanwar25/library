var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    "message": "yo"
  });
});

module.exports = router;
