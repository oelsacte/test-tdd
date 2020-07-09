const express = require("express")
const server1 = require('serverless-http')
const axios = require("axios")
const { users } = require('./endpoints')
const parser = require("body-parser")
const app = express()
const port = 3000;

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json());

const userHandler = users({ axios })

app.get("/test", userHandler.get)
app.post("/test", userHandler.post)
app.put("/test/:id", userHandler.put)
app.delete("/test/:id", userHandler.delete)

module.exports.handler = server1(app)
// const handler = serverless(app);

// module.exports.handler = async (event, context) => {
//     const result = await handler(event, context);
//     return result;
// };

// app.listen(port, ()=> console.log(`Listening on port ${port}`))