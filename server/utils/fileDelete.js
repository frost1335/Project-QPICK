const fs = require("fs");

const deleteFile = (imgArr) => {
  fs.unlink(`public${imgArr[0].large.path}`, (err) => {
    if (err) console.log(err.message);
  });
  fs.unlink(`public${imgArr[0].medium.path}`, (err) => {
    if (err) console.log(err.message);
  });
  fs.unlink(`public${imgArr[0].original.path}`, (err) => {
    if (err) console.log(err.message);
  });
  fs.unlink(`public${imgArr[0].thumbnail.path}`, (err) => {
    if (err) console.log(err.message);
  });
};

module.exports = deleteFile;
