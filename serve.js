const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 5000;
app.use(express.static('public'))

app.get('/',(req,res)=>{
    console.log("passou")
})

app.listen(port,() =>{
    console.log(`Programa rodando na porta ${port}. Acesse o link do serviço http://localhost:${port}/`)
})