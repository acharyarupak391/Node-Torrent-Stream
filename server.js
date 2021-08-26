const express = require("express");
const app = express();
const path = require("path")

var cors = require('cors')

const serverRoute = require('./routes')

const port = 3000;

app.use(cors())

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(serverRoute)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
