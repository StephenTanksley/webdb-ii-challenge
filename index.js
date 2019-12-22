const express = require('express')
const helmet = require('helmet')
const carsRouter = require('./routes/carsRouter')

const server = express();
server.use(helmet())
server.use(express.json());

server.use('/api/cars', carsRouter)
// server.use((req, res) => {
//     res
//         .status(404)
//         .json({ message: "Route was not found." })
//     })

server.use((err, req, res, next) => {
    console.log(err)
    res
        .status(500)
        .json({ message: "Something went wrong." })
})

const host = process.env.HOST || "127.0.0.1"
const port = process.env.PORT || 9000;
server.listen(port, host, () => {
  console.log(`Listening on http:${host}:${port}...`);
});