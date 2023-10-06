require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();
app.use(cors());
app.use(express.json());
//para hacer uso de las imagenes de la carpeta storage
app.use(express.static("storage"));
const port = process.env.PORT || 3002;

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}/`);
});

dbConnect();
