const handleHttpError = (res, message = "Algo sucedio", code = 403) => {
  res.status(code);
  res.send(message);
};

module.exports = { handleHttpError };
