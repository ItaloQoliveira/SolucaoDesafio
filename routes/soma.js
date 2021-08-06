const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    
    const { numero1, numero2 } = req.body; //json deve enviar numero1 e numero2
    if (!(numero1) || !(numero2)) {
        return res.status(400).send("Ambos ou um valor vazio, favor enviar numeros")
    }
    var soma = numero1 + numero2;
    var retorno = `${numero1} + ${numero2} = ${soma}`
    
    return res.status(200).send({ retorno })
})
module.exports = router;