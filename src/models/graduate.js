// hacer require del paquete
const mongoose = require("mongoose");

// schema egresado
const Schema = mongoose.Schema;

const graduateSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  school: String,
  profileImage: String,
  company: {
    name: String,
    charge: String,
  },
});

// graduateModel
const graduateModel = mongoose.model("gradute", graduateSchema);

async function createGraduateOnBD({ graduateData }) {
  return graduateModel.create(graduateData);
}

module.exports = {
  createGraduateOnBD,
};
