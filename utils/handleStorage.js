const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    //saca la extension del archivo, convierte un array desde el punto y sacamos la extension con el pop

    const ext = file.originalname.split(".").pop();
    // cambiar el nombre del archivo y colocar el propio.
    const filename = `file-${Date.now()}.${ext}`;

    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = { uploadMiddleware };
