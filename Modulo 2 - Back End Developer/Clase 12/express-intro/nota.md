En JavaScript, puedes crear un servidor HTTP de manera nativa utilizando el módulo http que viene incluido en Node.js. Sin embargo, también hay bibliotecas populares que facilitan la creación de servidores, como Express.js. A continuación, te mostraré ejemplos de ambas formas.

1. Servidor HTTP Nativo con Node.js
Aquí tienes un ejemplo básico de cómo crear un servidor HTTP utilizando el módulo nativo http:

```js
// Importar el módulo http
const http = require('http');

// Crear un servidor
const server = http.createServer((req, res) => {
    // Configurar la respuesta
    res.statusCode = 200; // Código de estado 200 OK
    res.setHeader('Content-Type', 'text/plain'); // Tipo de contenido
    res.end('Hola, mundo!\n'); // Mensaje de respuesta
});

// Definir el puerto y la dirección IP
const PORT = 3000;
const HOST = '127.0.0.1';

// Hacer que el servidor escuche en el puerto especificado
server.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}/`);
});
```

2. Servidor HTTP con Express.js
Express.js es un framework minimalista y flexible para Node.js que proporciona un conjunto robusto de características para construir aplicaciones web y móviles. Aquí tienes un ejemplo básico:

Primero, asegúrate de instalar Express si aún no lo has hecho:

npm install express

Luego, puedes crear un servidor de la siguiente manera:

```js
// Importar el módulo express
const express = require('express');

// Crear una aplicación express
const app = express();

// Definir una ruta básica
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

// Definir el puerto
const PORT = 3000;

// Hacer que la aplicación escuche en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
```

Conclusión
Ambas formas son válidas y la elección entre usar el módulo nativo http o una biblioteca como Express.js depende de tus necesidades. Si solo necesitas un servidor simple, el módulo nativo es suficiente. Sin embargo, si planeas construir una aplicación más compleja, Express.js puede ahorrarte tiempo y esfuerzo.