const express = require ('express')

const app  = express();

app.get('/',(req,res)=>res.send('hello work'))

app.listen(3000)
console.log('corriendo puerto 3000')