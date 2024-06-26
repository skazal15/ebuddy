"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, req, res, next) => {
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({ message });
};
exports.handleError = handleError;
