const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.json());

let personList = []

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
    res.send(`Usuario recebido ${name}`)
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
