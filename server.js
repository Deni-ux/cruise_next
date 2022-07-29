//install express then create server.js file

//change "dev" in package.json to "node  server.js"

// const express = require('express');
// const next = require('next');
// const dev = process.env.NODE_ENV !== 'production';

// //handle requests
// const app = next({ dev });
// const handle = app.getRequestHandler();

// //get req
// app.prepare().then(() => {
//     const server = express()
//     server.get('*', (req, res) => {
//         return handle(req, res)
//     });
//     server.listen(3030, (err) => {
//         if (err) throw err
//         console.log('Server ready');
//     })
// }).catch((ex) => {
//     console.log(ex.stack);
//     process.exit(1);
// })
