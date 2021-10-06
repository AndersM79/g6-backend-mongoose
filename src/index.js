const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const Multer = require("multer");

app.use(cors());

const multerMiddleware = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

app.post("/graduate", multerMiddleware.any(), (req, res) => {
  let image = req.files;
  console.log("🚀 ~ file: index.js ~ line 18 ~ app.post ~ image", image);
  let body = req.body;
  console.log("🚀 ~ file: index.js ~ line 19 ~ app.post ~ body", body);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
