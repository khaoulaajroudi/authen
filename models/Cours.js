const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CoursSchema = new Schema({
  nameCours: {
    type: "String",
    required: true,
  },
  domaine: {
    type: "String",
    required: true,
  },
  cycle: {
    type: "String",
    // required: true,
  },
  enseignant: {
    type: "String",
    // required: true,
  },
  isFree: {
    type: "boolean",
    default: true,
  },
  certifier: {
    type: "boolean",
    default: false,
  },
  description: {
    type: "String",
    default: false,
  },
  module: {
    type: "String",
    default: "0",
  },
  continue: {
    type: "String",
  },
  // reviews: [
  //   {
  //     User: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  //     image: {
  //       type: mongoose.Schema.ObjectId,
  //       required: true,
  //     },
  //     name: {
  //       type: "String",
  //       required: true,
  //     },
  //     rating: {
  //       type: "Number",
  //       required: true,
  //     },
  //     message: {
  //       type: "String",
  //       required: true,
  //     },
  //   },
  // ],
});
module.exports = mongoose.model("Cours", CoursSchema);
