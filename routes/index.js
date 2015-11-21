var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Express' }); // TODO create about page content
});

router.get('/blog', function(req, res, next) {
  res.redirect('blog.jngrn.co'); // TODO create a blog to redirect to
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects Express' }); // TODO create projects page content
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Express' }); // TODO create contact page content
});

module.exports = router;
