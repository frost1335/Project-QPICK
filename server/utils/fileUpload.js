const multer = require("multer");
const MulterSharpResizer = require("multer-sharp-resizer");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    db(null, false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadProductImages = upload.fields([{ name: "img", maxCount: 1 }]);

exports.resizerImages = async (req, res, next) => {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, "0");

    const filename = {
      img: `img-${Date.now()}`,
    };
    const sizes = [
      {
        path: "original",
        width: null,
        height: null,
      },
      {
        path: "large",
        width: 600,
        height: 600,
      },
      {
        path: "medium",
        width: 300,
        height: 300,
      },
      {
        path: "thumbnail",
        width: 150,
        height: 150,
      },
    ];

    const uploadPath = `./public/uploads/${year}/${month}`;

    const fileUrl = `/uploads/${year}/${month}`;

    const sharpOptions = {
      fit: "cover",
      background: { r: 255, g: 255, b: 255 },
    };

    const resizeObj = new MulterSharpResizer(
      req,
      filename,
      sizes,
      uploadPath,
      fileUrl,
      sharpOptions
    );

    await resizeObj.resize();

    const getDataUploaded = resizeObj.getData();

    req.body.img = getDataUploaded.img;

    next();
  } catch (error) {
    next(error.message);
  }
};
