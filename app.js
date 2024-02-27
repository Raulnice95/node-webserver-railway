require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')

// Servir contenido estatico | Los middleware es para servir rutas con el express.use
app.use( express.static('public') )


app.get('/', (req, res) => {
  res.render('home', { 
    nombre: 'Raul Nieva',
    titulo: 'Curso de node' 
});
})

app.get('/generic', (req, res) => {
    res.render('generic', { 
        nombre: 'Raul Nieva',
        titulo: 'Curso de node' 
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', { 
        nombre: 'Raul Nieva',
        titulo: 'Curso de node' 
    });
})

// Para enviar error con cualquier pagina no encontrada
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html') // Hay que mandar la ruta completa
})

app.listen( port, () => {
    console.log(`La aplicacion esta corriendo en http://localhost:${port}`)
})