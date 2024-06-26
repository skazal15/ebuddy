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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.updateUser = exports.createUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const createUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield firebaseConfig_1.db.collection('USERS').doc(userId).set(userData);
});
exports.createUser = createUser;
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield firebaseConfig_1.db.collection('USERS').doc(userId).set(userData, { merge: true });
});
exports.updateUser = updateUser;
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield firebaseConfig_1.db.collection('USERS').doc(userId).get();
});
exports.getUser = getUser;
