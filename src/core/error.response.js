"use strict";

const { StatusCodes, ReasonPhrases } = require("../utils/httpStatusCode");
class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
class ConflictRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.CONFLICT, status = StatusCodes.CONFLICT) {
    super(message, status);
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    status = StatusCodes.BAD_REQUEST
  ) {
    super(message, status);
  }
}
class FORBIDDEN extends ErrorResponse {
  constructor(
    message = ReasonPhrases.FORBIDDEN,
    status = StatusCodes.FORBIDDEN
  ) {
    super(message, status);
  }
}
class AuthFailureError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.AuthFailureError,
    status = StatusCodes.AuthFailureError
  ) {
    super(message, status);
  }
}
class NotFoundError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_FOUND,
    status = StatusCodes.NOT_FOUND
  ) {
    super(message, status);
  }
}

module.exports = {
  AuthFailureError,
  ConflictRequestError,
  BadRequestError,
  NotFoundError,
  FORBIDDEN,
};
