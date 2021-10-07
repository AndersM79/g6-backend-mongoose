const express = require("express");
const multerMiddleware = require("../config/multer");

const router = express.Router();

const { createGraduate } = require("../services/graduate");

router.post("/", multerMiddleware.any(), async (req, res) => {
  try {
    // recibe la imagen
    let image = req.files[0];
    let body = req.body;
    await createGraduate({ graduateData: body, image });
    res.send("se registro el graduado correctamente");
  } catch (error) {
    console.log(
      "🚀 ~ file: graduate.js ~ line 16 ~ router.post ~ error",
      error
    );
    res.status(400).send("Ocurrio un error al registar el egresado");
  }
});

module.exports = router;
