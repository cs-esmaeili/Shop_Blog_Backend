exports.mimeType = (file) => {
   return (file.substring(file.indexOf(".") + 1))
};
