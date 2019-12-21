const express = require('express')
// const db = require('./<whatever my db file is here');

const server = express();

server.use(express.json());



server.use((err, req, res, next) => {
    console.log(err)
    res
        .status(500)
        .json({ message: "Something went wrong." })
})

module.exports = server;