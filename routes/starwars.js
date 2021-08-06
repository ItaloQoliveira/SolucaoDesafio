const express = require('express')
const router = express.Router();
const https = require('https')

router.get('/films', (req, res) => {
    
    https.get('https://swapi.dev/api/films', resposta => { //get na api de starwars para coleta de informação
        let data = [];
        var nomes=[];
        resposta.on('data', chunk => {
            data.push(chunk);
        });
        
        resposta.on('end', () => {
            const filmes = JSON.parse(Buffer.concat(data).toString());
            
            filmes.results.forEach(e => {
                nomes.push(e.title); //extrair o titulo do resultado da consulta
            })
            
            return res.status(200).send(nomes);
        });
    }).on('error', err => {
        console.log('Error: ', err.message);
    });

})

module.exports = router;