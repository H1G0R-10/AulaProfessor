const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.json());

let personList = [];

const port = 3001;

app.get('/visualizar', (req, res) => {
    res.send(personList);
});

app.get('/params/:id', (req, res) => {
    const { id } = req.params;
    
    res.send(id);
});


app.post('/cadastrar', (req,res) => {
    const { name, age } = req.body;
    personList.push({name, age})
    res.send(`Usuario recebido ${name}, ${age}`)
});

app.delete('/delete/:id', (req,res) => {
    const {id} = req.params
    if (personList[id - 1]){
        personList.slice(id - 1,1);
        res.send("Usuario deletado")
    }else{
        res.status(404).send('uUsuario nao encontrado')

    }
    

});

app.put('/atualizar/:id', (req,res) =>{
    const {id} = req.params;
    const {name, age} = req.body;
    try{
        personList[id - 1] = {id, name, age}
        res.send(`Usuario atualizado ${id} Nome nome:${name} nova idade: ${age}`);
    }
    catch(err){
        res.send("usuaria nao encontrado")
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
