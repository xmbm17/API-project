const router = require('express').Router();


router.post('/test', function(req, res) {
  console.log('TEST WORKED')
  res.json({ requestBody: req.body });
});




module.exports= router;