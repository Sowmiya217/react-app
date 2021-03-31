import express from "express"

const webServer = express()

webServer.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // this is the url that our client is running
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

webServer.get("/", (req, res) => {
    res.send("HelloWorld")
})

webServer.get("/userInfo", (req, res) => {
    res.send({ result: {name: "John", fullName: "John Smith"}, statusCode: 200 })
})

export const port = 3002
webServer.listen({ host: "0.0.0.0", port: port }, () => {
  console.log(`Listening at http://localhost:${port}`)
})