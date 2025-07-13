"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
exports.app = (0, express_1.default)();
exports.app.get("/", (req, res) => {
    res.send("Hello World");
});
exports.app.get("/cpu", (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        Math.random();
    }
    res.send("Hello World");
});
exports.app.get("/host", (req, res) => {
    res.send(os_1.default.hostname());
});
