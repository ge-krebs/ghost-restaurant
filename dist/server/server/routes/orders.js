"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const db = __importStar(require("../db/db"));
const router = express_1.default.Router();
//gets all orders
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield db.getOrders();
        res.json(orders);
    }
    catch (e) {
        next(e);
    }
}));
//gets incomplete orders (for pickup)
router.get('/pickup/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield db.getOrdersForPickUp();
        res.json(orders);
    }
    catch (e) {
        next(e);
    }
}));
//places a new order
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const placeOrder = yield db.newOrder(req.body);
        res.json(placeOrder);
    }
    catch (e) {
        next(e);
    }
}));
//deletes an order by id
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const deletedOrder = yield db.deleteOrder(id);
        res.json(deletedOrder);
    }
    catch (e) {
        next(e);
    }
}));
//marks order as complete
router.put('/completeOrder/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        yield db.completeOrder(id);
        res.status(200);
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
