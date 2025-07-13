"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const index_1 = require("./index");
const cluster_1 = __importDefault(require("cluster"));
if (cluster_1.default.isPrimary) {
    console.log(`Master process id is ${process.pid}`);
    for (let i = 0; i < os_1.default.cpus().length; i++) {
        cluster_1.default.fork();
    }
}
else {
    index_1.app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}
