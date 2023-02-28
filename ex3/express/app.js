const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  res.send({
    message: 'Hello world'
  });
}); 

 app.get('/rd', (_, res) => {
    res.send({
        message: `Número aleatorio: ${Math.floor(Math.random() * (11 - 1)+1)}`
    });
}); 

app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});

function fibo(n){
    let arr = [];
    let fibonaccci = 0;
    let fOne = 1;
    let ftwo = 0;
    for(let i = 0; i<n; i++){
        ftwo = fibonaccci + fOne;
        fibonaccci = fOne;
        fOne = ftwo;
        arr.push(fibonaccci);
    }
    return arr;
}

app.post('/fibo', (_, res) => {
    res.send({
        message: `Los primeros 10 números de fibonacci son: ${fibo(10)}`
    });
});

app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});