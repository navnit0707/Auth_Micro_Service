const AppError = require("./error-handler");
const { StatusCodes } = require("../utils/error-codes");

class ClientError extends AppError {
  constructor({ name, message, explanation, statusCode }) {
    super(name, message, explanation, statusCode);
  }
}

module.exports = ClientError;
