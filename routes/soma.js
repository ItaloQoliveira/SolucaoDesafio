const express = require('express')
const router = express.Router();

router.post('/',(req, res)=>{
    var soma = req.body[0] + req.body[1] //req body possui array de numeros
    var retorno = `${req.body[0]} + ${req.body[1]} = ${soma}`
    console.log(req.body)
    return res.status(200).send({retorno})
})
module.exports = router;