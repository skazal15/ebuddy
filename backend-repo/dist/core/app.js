"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const errorHandler_1 = require("../middleware/errorHandler");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', userRoutes_1.default);
app.use(errorHandler_1.handleError);
exports.default = app;
