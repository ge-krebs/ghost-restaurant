"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeOrder = exports.unfilledLockers = exports.fillLocker = exports.getLockers = exports.deleteOrder = exports.newOrder = exports.getOrdersForPickUp = exports.getOpenOrders = exports.getOrders = exports.getMenuItems = void 0;
const connection_1 = __importDefault(require("./connection"));
//get all menu items
function getMenuItems() {
    return (0, connection_1.default)('menu').select(); //all
}
exports.getMenuItems = getMenuItems;
//get all orders + joins menu to get item name
function getOrders() {
    return connection_1.default.select('orders.id', 'orders.name', 'orders.item_id', 'orders.locker_id', 'orders.complete', 'menu.item').from('orders').join('menu', { 'menu.id': 'orders.item_id' });
}
exports.getOrders = getOrders;
//export only open orders
function getOpenOrders() {
    return (0, connection_1.default)('orders').select('*').where('complete', false);
}
exports.getOpenOrders = getOpenOrders;
//gets all orders + joins menu and lockers
function getOrdersForPickUp() {
    return (0, connection_1.default)('orders')
        .select('orders.name', 'orders.item_id', 'orders.locker_id', 'orders.complete', 'menu.item', 'menu.image', 'lockers.filled').where('complete', false)
        .join('menu', { 'menu.id': 'orders.item_id' }).join('lockers', { 'lockers.id': 'orders.locker_id' });
}
exports.getOrdersForPickUp = getOrdersForPickUp;
//creates new order
function newOrder(data) {
    return (0, connection_1.default)('orders').insert(data);
}
exports.newOrder = newOrder;
//deletes an order
function deleteOrder(id) {
    return (0, connection_1.default)('orders').delete().where({ id });
}
exports.deleteOrder = deleteOrder;
// L O C K E R   Q U E R I E S //
//gets all lockers and attaches order + memu
function getLockers() {
    return (0, connection_1.default)('lockers')
        .select('lockers.id', 'lockers.filled', 'orders.id as order_id', 'orders.name', 'menu.item', 'menu.image')
        .fullOuterJoin('orders', { 'orders.locker_id': 'lockers.id' })
        .leftOuterJoin('menu', { 'menu.id': 'orders.item_id' });
}
exports.getLockers = getLockers;
//marks a locker as filled
function fillLocker(id) {
    return (0, connection_1.default)('lockers').where({ id }).update({ filled: true });
}
exports.fillLocker = fillLocker;
//exports unfilled locker numbers
function unfilledLockers() {
    return (0, connection_1.default)('lockers').select('id').where('filled', false);
}
exports.unfilledLockers = unfilledLockers;
//marks order as completed and removes locker number
function completeOrder(id) {
    return (0, connection_1.default)('orders').update({ complete: true, locker_id: null }).where({ id });
}
exports.completeOrder = completeOrder;
