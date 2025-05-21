const express = require('express');

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (request, response) => {
    let resultado = [];

    let a = 0, b = 1;
 
    for(let cont = 1; cont <= 20; cont++){
        resultado.push(a);
        [a,b] = [b, a + b]
    }
    response.render('home', {valores : resultado});
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});