const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const axios = require('axios')
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));

})

app.post('/rota', (req, res) => {
    const data = req.body;

    console.log(data);
    res.json(data);
})

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

    if(!cepRegex.test(cep)){
        res.status(400).send("CEP inválido. Formato: XXXXX-XXX");
    }


    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        res.json(response.data);
    } catch (error) {
        console.error("Erro ao fazer requisição: ", error);
        res.status(500).send("Erro ao consultar o CEP");
    }


});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})