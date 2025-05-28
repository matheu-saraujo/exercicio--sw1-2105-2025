const express = require('express');

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (request, response) => {
    let resultado = [0, 1];
 
    for(let cont = 2; cont <= 20; cont++){
        resultado.push(resultado [cont - 1] + resultado[cont - 2]);
    }
    response.render('home', {valores : resultado});
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});