"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const ApiError_1 = __importDefault(require("../entities/ApiError"));
const userCollection_1 = require("../repository/userCollection");
const updateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, userData } = req.body;
        yield (0, userCollection_1.updateUser)(userId, userData);
        res.status(200).json({ message: 'User data updated successfully' });
    }
    catch (error) {
        next(new ApiError_1.default(500, error.message));
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const userDoc = yield (0, userCollection_1.getUser)(userId);
        if (!userDoc.exists) {
            throw new ApiError_1.default(404, 'User not found');
        }
        else {
            res.status(200).json(userDoc.data());
        }
    }
    catch (error) {
        next(new ApiError_1.default(500, error.message));
    }
});
exports.fetchUserData = fetchUserData;
