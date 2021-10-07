const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const { storage } = require("../config/firebase");

const { createGraduateOnBD } = require("../models/graduate");

async function createGraduate({ graduateData, image }) {
  try {
    // creamos la referencia de donde va a guardar y con que nombre
    const storageRef = ref(storage, image.originalname);
    // sube el archivo al storage
    const snapshot = await uploadBytes(storageRef, image.buffer);
    // obtenemos el url del archivo
    const downloadURL = await getDownloadURL(snapshot.ref);
    const newGraduate = {
      ...graduateData,
      profileImage: downloadURL,
    };
    await createGraduateOnBD({ graduateData: newGraduate });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createGraduate,
};
