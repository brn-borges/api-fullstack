const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || 8080)

let bancoVetor = [{nome:'Bruno', funcao:'Programador Junior', salario: 1880.00}];

app.post('/novo', (req, res) => {
   bancoVetor.push(req.body);
   return res.json(bancoVetor[bancoVetor.length-1]);
});

app.post('/visualizar', (req, res) => {
    const { id } = req.body;
    return res.json(bancoVetor[id]);
});

app.post('/lista', (req, res) => {
    return res.json(bancoVetor);
});

app.post('/atualizar', (req, res) => {
    const { id } = req.body;
    bancoVetor[id] = req.body;
    return res.send(bancoVetor[id]);
});

app.post('/excluir', (req, res) => {
    const { id } = req.body;
    let nome ='';
    for(let i = 0; i < bancoVetor.length; i++ ){
        if(id == i){
          bancoVetor.splice(id, 1);
        }
    }
    return res.send(bancoVetor);
})