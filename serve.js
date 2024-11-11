const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs')

const app = express();
const port = 5000;
app.use(express.static('public'))

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})
app.engine('handlebars', hbs.engine)
app.set ('view engine', 'handlebars')

function getDataFilmes(){
    const jsonDataFilems = fs.readFileSync("data/filmes.json",{
        encoding: 'utf8',
        flag: 'r',
    });

    return JSON.parse(jsonDataFilems);
}

app.get('/series',(req,res)=>{
    let modals = getDataFilmes()
    res.render('series',{modals})
})

app.get('/filmes',(req,res)=>{
    let modals = getDataFilmes()
    res.render("filmes",{modals})
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,() =>{
    console.log(`Programa rodando na porta ${port}. Acesse o link do serviço http://localhost:${port}/`)
})