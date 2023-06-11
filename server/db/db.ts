import db from './connection'

import { MenuItem } from '../../models/Menu'
import { OrderList, NewOrder } from '../../models/OrderList'

//get all menu items
export function getMenuItems(): Promise<MenuItem[]> {
  return db<MenuItem>('menu').select() //all
}

//get all orders
export function getOrders(): Promise<OrderList[]> {
  return db('orders').select() //all
}

//export only open orders
export function getOpenOrders() {
  return db('orders').select('*').where('complete', 'false')
}

//creates new order
export function newOrder(data: NewOrder) {
  return db('orders').insert(data)
}

//deletes an order
export function deleteOrder(id: number) {
  return db('orders').delete().where({id})
}