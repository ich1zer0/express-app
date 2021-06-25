const errorMessages = require('../config/node-error_messages');

class NodeHttpError extends Error {
  constructor(status = 500, message = errorMessages[500], ...params) {
    super(params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NodeHttpError);
    }
    this.name = 'HttpError';
    // Custom debugging information
    this.status = status;
    this.message = message;
    this.date = new Date();
  }
}

module.exports = NodeHttpError;
