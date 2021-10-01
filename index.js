// hacer require del paquete
const mongoose = require("mongoose");

// definir la uri de conexion
const uri = "";

// extablecer la conexion
mongoose.connect(uri);

// imprimir el estado de la conexion
const database = mongoose.connection;
database.once("open", () => {
  console.log("MongoBD connection open!!");
});
database.on("error", console.error.bind(console, "MongoBD connetion error"));

// schema egresado
const Schema = mongoose.Schema;

const graduateSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  school: String,
  company: {
    name: String,
    charge: String,
  },
});

// graduateModel
const graduateModel = mongoose.model("gradute", graduateSchema);

// consultas u operaciones
// graduateModel.find().then((data) => {
//   console.log(
//     "🚀 ~ file: index.js ~ line 37 ~ graduateModel.find ~ data",
//     data
//   );
// });

// graduateModel
//   .create({
//     name: "test1",
//     phone: "+523221323",
//     email: "test@email",
//     school: "school test",
//     company: {
//       name: "company test",
//       charge: "charge test",
//     },
//   })
//   .then((data) => {
//     console.log("🚀 ~ file: index.js ~ line 53 ~ data", data);
//   });

// graduateModel
//   .findByIdAndUpdate(
//     "615659d6a1c80b2224fd85d8",
//     { name: "jason bourne" },
//     { new: true }
//   )
//   .then((data) => {
//     console.log(
//       "🚀 ~ file: index.js ~ line 59 ~ graduateModel.findByIdAndUpdate ~ data",
//       data
//     );
//   });

// graduateModel.findByIdAndRemove("615659d6a1c80b2224fd85d8").then((data) => {
//   console.log(
//     "🚀 ~ file: index.js ~ line 72 ~ graduateModel.findByIdAndRemove ~ data",
//     data
//   );
// });
