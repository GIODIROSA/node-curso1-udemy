const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: Number,
    },
  },
  {
    timestamps: true, //TODO createAT, updateAT
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageScheme);
