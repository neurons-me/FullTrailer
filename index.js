// apps/fulltrailer/index.js - Aplicación FullTrailer que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = 9000;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host; // Obtiene el dominio desde el request

    // Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'rafagas.com.mx':
            // Redirigir a la sección específica para rafagas.com.mx
            res.redirect('/rafagas'); // Esta ruta puede renderizar una vista o ejecutar lógica específica
            break;
        case 'fulltrailer.com.mx':
            // Redirigir a la sección principal de FullTrailer
            res.redirect('/fulltrailer');
            break;
        case 'metro-bus.mx':
            // Redirigir a la sección de Metro Bus
            res.redirect('/metrobus');
            break;
        case 'hyundai.space':
            // Redirigir a la sección de Hyundai
            res.redirect('/hyundai');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección

app.get('/rafagas', (req, res) => {
    // Renderiza o maneja la lógica para rafagas.com.mx
    res.send('Bienvenido a la sección de Ráfagas.');
});

app.get('/fulltrailer', (req, res) => {
    // Renderiza o maneja la lógica para fulltrailer.com.mx
    res.send('Bienvenido a FullTrailer.');
});

app.get('/metrobus', (req, res) => {
    // Renderiza o maneja la lógica para metro-bus.mx
    res.send('Bienvenido a Metro Bus.');
});

app.get('/hyundai', (req, res) => {
    // Renderiza o maneja la lógica para hyundai.space
    res.send('Bienvenido a Hyundai Space.');
});

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`FullTrailer está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});