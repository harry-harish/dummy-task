var express = require('express');
var router = express.Router();

/**
 * @param {string} a
 * @param {string} b
 * @returns
 */
function sumTwoNumbers(a,b){
  return parseInt(a) + parseInt(b);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/print-request', function (req, res) {
  res.send(req.params);
});

router.get('/get-sum', function (req, res) {
  const {a, b} = req.query
  var sum = sumTwoNumbers(a,b);
  res.send(sum.toString());
});


module.exports = router;
