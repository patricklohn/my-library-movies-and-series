const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 5000;
app.use(express.static('public'))

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})
app.engine('handlebars', hbs.engine)
app.set ('view engine', 'handlebars')

const meioBusca = 'https://www.google.com/search?q=';

app.get('/filmes',(req,res)=>{
    const modals = [
        {
            name: 'Carandiru: O Filme',
            linkImg: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/00/05/19870969.jpg',
            category: 'Crime/Drama',
            description: 'Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação, a precariedade dos serviços prestados e a animalização dos presos. Paradoxalmente, ele conhece o sistema de organização interna e o lado frágil, romântico e sonhador dos homens cumprindo pena.',
            nota: '6',
            searchGoogle: `${meioBusca}Carandiru:+O+Filme`
        }
    ]

    res.render("filmes",{modals})
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,() =>{
    console.log(`Programa rodando na porta ${port}. Acesse o link do serviço http://localhost:${port}/`)
})