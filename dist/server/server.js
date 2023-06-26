"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const express_1 = __importDefault(require("express"));
const menu_1 = __importDefault(require("./routes/menu"));
const orders_1 = __importDefault(require("./routes/orders"));
const locker_1 = __importDefault(require("./routes/locker"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/api/v1/menu', menu_1.default);
server.use('/api/v1/orders', orders_1.default);
server.use('/api/v1/locker', locker_1.default);
if (process.env.NODE_ENV === 'production') {
    server.use('/assets', express_1.default.static((0, node_path_1.join)(__dirname, '../assets')));
    server.use('/', express_1.default.static((0, node_path_1.join)(__dirname, '../public')));
    server.get('*', (req, res) => {
        res.sendFile((0, node_path_1.join)(__dirname, '../index.html'));
    });
}
exports.default = server;
