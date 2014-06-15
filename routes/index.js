var express = require('express');
var router = express.Router();
var paypal_sdk = require('paypal-rest-sdk');
paypal_sdk.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQTXKBDwUWMMBG8Fny44qu-hy_AnINeqkDYbNGBStfpgJi1Bre0uEi4BOYfL',
  'client_secret': 'EHYYshDxx7hPPMqhU9Fx9Pa-58z27gZTI8GiL72fHyGDYdrrpkwfWMuTWGXH'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/ppauth',function(req,res){
    var payment_details = {
  "intent": "authorize",
  "payer": {
      "payment_method": "paypal"
    },
  "transactions": [{
    "amount": {
      "total": "1",
      "currency": "GBP"},
    "description": "This is the payment transaction description." }]};

paypal_sdk.payment.create(payment_details, function(error, payment){
  if(error){
      res.json(error);
    console.error(error);
  } else {
      res.json(payment);
    console.log(payment);
  }
});
})

module.exports = router;
