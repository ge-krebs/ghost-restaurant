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
// @vitest-environment node
const vitest_1 = require("vitest");
const connection_1 = __importDefault(require("./connection"));
const db = __importStar(require("./db"));
(0, vitest_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.migrate.latest();
}));
(0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.seed.run();
}));
(0, vitest_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.destroy();
}));
(0, vitest_1.describe)('testing working', () => {
    (0, vitest_1.it)('works as expected', () => {
        vitest_1.expect.assertions(2);
        (0, vitest_1.expect)(false).not.toBeTruthy();
        (0, vitest_1.expect)(NaN).toBeNaN();
    });
});
//menu testing
(0, vitest_1.describe)('getMenuItems', () => {
    (0, vitest_1.it)('returns the correct menu array', () => __awaiter(void 0, void 0, void 0, function* () {
        const items = yield db.getMenuItems();
        (0, vitest_1.expect)(items).toHaveLength(6);
        (0, vitest_1.expect)(items[0]).toHaveProperty('description');
        (0, vitest_1.expect)(items[1].price).toBe(6);
    }));
});
//locker testing
(0, vitest_1.describe)('getLockers', () => {
    (0, vitest_1.it)('returns the correct locker array', () => __awaiter(void 0, void 0, void 0, function* () {
        const lockers = yield db.getLockers();
        (0, vitest_1.expect)(lockers).toHaveLength(9);
    }));
    vitest_1.it.todo('returns the unfilled lockers only', () => __awaiter(void 0, void 0, void 0, function* () {
        // const lockers = await getLockers()
        // const unfilledIds = await unfilledLockers()
        //currently not returning the correct data from the db
    }));
});
//order testing
(0, vitest_1.describe)('orders', () => __awaiter(void 0, void 0, void 0, function* () {
    (0, vitest_1.it)('returns the orders with the menu item name joined', () => __awaiter(void 0, void 0, void 0, function* () {
        const orders = yield db.getOrders();
        (0, vitest_1.expect)(orders[0]).toHaveProperty('item');
    }));
    (0, vitest_1.it)('returns only open orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const openOrders = yield db.getOpenOrders();
        (0, vitest_1.expect)(openOrders[0].complete).toBe(0);
    }));
}));
