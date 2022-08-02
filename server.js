//install express then create server.js file

//change "dev" in package.json to "node  server.js"

const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000

//handle requests
const app = next({ dev });
const handle = app.getRequestHandler();

//get req
app.prepare().then(() => {
    const server = express()
    server.all('*', (req, res) => {
        return handle(req, res)
    });
    server.listen(port, () => {
        
        console.log('Server ready!');
    })
}).catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})

// to run custom server update in package.json:
// "scripts": {
//   "dev": "node server.js",
//   "build": "next build",
//   "start": "NODE_ENV=production node server.js"
// }

// to prevent routing based on files in pages, open next.config.js and disable the useFileSystemPublicRoutes config:

// module.exports = {
//     useFileSystemPublicRoutes: false,
// }