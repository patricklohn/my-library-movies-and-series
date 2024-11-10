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

app.get('/series',(req,res)=>{
    const modals = [
        {
            name: 'Carandiru: O Filme',
            linkImg: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/00/05/19870969.jpg',
            category: 'Crime/Drama',
            description: 'Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação.',
            nota: '6',
            searchGoogle: `${meioBusca}Carandiru:+O+Filme`
        }
    ]
    res.render('series',{modals})
})

app.get('/filmes',(req,res)=>{
    const modals = [
        {
            name: 'Carandiru: O Filme',
            linkImg: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/00/05/19870969.jpg',
            category: 'Crime/Drama',
            description: 'Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação.',
            nota: '6',
            searchGoogle: `${meioBusca}Carandiru:+O+Filme`
        },
        {
            name: 'Poderoso Chefão',
            linkImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdn65mLMLQpkC4qYpW1RkRihWAPAr3S8aiM_YwHX3jxQuSL5XScTA_Ae4GlOYPrl16ZauC-blauUb1rtS9ZVnL31_zDwzwyNeXcYLAkw',
            category: 'Crime/Ficção policial',
            description: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.',
            nota: '10',
            searchGoogle: `${meioBusca}Poderoso:+Chefão`
        },
        {
            name: 'Django Livre',
            linkImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveIIcqGajN50Ic8RJs6IlglJSvKuZF4VikQ&s',
            category: 'Faroeste/Ação',
            description: 'No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para perseguir os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a entrarem em competições mortais.',
            nota: '8',
            searchGoogle: `${meioBusca}Django+Livre`
        },
        {
            
            name: '1917',
            linkImg: 'data:image/jpeg;base64,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',
            category: 'Guerra/Ação',
            description: 'Na Primeira Guerra Mundial, dois soldados britânicos recebem ordens aparentemente impossíveis de cumprir. Em uma corrida contra o tempo, eles precisam atravessar o território inimigo e entregar uma mensagem que pode salvar 1.600 de seus companheiros.',
            nota: '10',
            searchGoogle: `${meioBusca}1917`
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