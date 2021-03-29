const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const caminho = require('path');
let port=3000;

const erro404= function(req,res,next)
{
    res.send("Você esta acessando um link inválido ou inexistente: ERRO 404");
    console.log("erro 404");
    next();
}

app.set('view engine','pug');
app.set('views', caminho.join(__dirname,"views"));

app.get('/', (req,res)=>
{
    res.render("index");  
    console.log("Acesso a Pagina index");
});

app.get('/contato', (req,res)=>{
    res.render("form");
    console.log("Acesso a Pagina Formulario");
});

app.use(bodyparser.urlencoded({extend:false}));

app.post('/contato',(req,res)=>
{
    console.log("Usuario: "+req.body.user);
    console.log("E-mail: "+req.body.email);
    console.log("Comentarios: "+req.body.coments);
    res.redirect('/');
});

app.use('*', erro404);

app.listen(port,()=> console.log(`Aguardando porta ${port}`));