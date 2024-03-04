const _enum = require("../config/enum");
const CustomError = require("./Error");

class Response {
  static successResponse(code = 200, data) {
    return {
      code,
      data,
    };
  }

  static errorResponse(error) {
    if (error instanceof CustomError) {
      return {
        code: error.code,
        error: {
          message: error.message,
          description: error.description,
        },
      };
    }

    return {
      code: _enum.HTTP_CODES.INT_SERVER_ERROR,
      error: {
        message: "Unknown Error!",
        description: error.message,
      },
    };
  }
}

module.exports = Response;
