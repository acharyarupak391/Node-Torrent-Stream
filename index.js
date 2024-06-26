const express = require("express");
const app = express();
const path = require("path");

var cors = require("cors");

const serverRoute = require("./routes");

const port = process.env.PORT || 8080;

// app.use(cors())
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(serverRoute);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
