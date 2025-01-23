const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Hello, World!');
})


app.post('/h2',(req,res)=>{
  // res.send('Hello, World from POST route!');

  console.log(req.query);
  res.status(202).json({
    message: 'POST request received',
    data : req.query
  })
})



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});