var express = require('express')
var app = express() //criação do app express

app.use(express.urlencoded({extended: true})); //possibilitar a leitura de JSON
app.use(express.json())

 //Importando as rotas da aplicação
const helloRoute = require('./routes/hello.js');
const somaRoute = require('./routes/soma');
const starwarsRoute = require('./routes/starwars.js');
 //configurando as rotas da aplicação
app.use('/hello', helloRoute); 
app.use('/soma',somaRoute); 
app.use('/starwars',starwarsRoute); 

//selecionando a porta que a aplicação vai utilizar
app.listen(3000);
