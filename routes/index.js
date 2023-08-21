var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',font:'' });
});
router.post('/',(req,res,next)=>{
  var font=req.body.font;
  var text=req.body.text; 
  console.log(font);

  res.render('index',{title:'Express', font:font})

})

module.exports = router;
