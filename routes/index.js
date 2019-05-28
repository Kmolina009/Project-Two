var express = require('express');
var router = express.Router();
var passport= require('passport');
var User =require('./models/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Walkles' });
});
router.get('/auth/google', passport.authenticate(
  'google',
{ scope: ['name','email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/User/index',
    failedRedirect:'/index' 
  }
));
router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/')
});
module.exports = router;
