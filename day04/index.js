const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Welcom to FlipKart');
});

app.post('/phone',function(req,res){
  res.json({
    "item": "Smartphone",
    "price": 9999.99,
    "quantity": 10,
    data: req.query
  })
})

app.post('/tv',function(req,res){
  res.status(202).json({
    "item": "TV",
    "price": 19999.99,
    "quantity": 5,
    'data': req.query
  })

})

app.listen(5000);