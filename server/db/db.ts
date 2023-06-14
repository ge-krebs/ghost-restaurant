import db from './connection'

import { MenuItem } from '../../models/Menu'
import { OrderList, NewOrder } from '../../models/OrderList'

//get all menu items
export function getMenuItems(): Promise<MenuItem[]> {
  return db<MenuItem>('menu').select() //all
}

//get all orders + joins menu to get item name
export function getOrders(): Promise<OrderList[]> {
  return db.select('orders.id', 'orders.name', 'orders.item_id', 'orders.locker_id', 'orders.complete', 'menu.item').from('orders').join('menu', {'menu.id': 'orders.item_id'})
}

//export only open orders
export function getOpenOrders() {
  return db('orders').select('*').where('complete', false)
}

//creates new order
export function newOrder(data: NewOrder) {
  return db('orders').insert(data)
}

//deletes an order
export function deleteOrder(id: number) {
  return db('orders').delete().where({id})
}

// L O C K E R   Q U E R I E S //

//gets all lockers
export function getLockers(){
  return db('lockers').select() //all
}

//marks a locker as filled
export function fillLocker(id: number){
  return db('lockers').where({id}).update({filled: true})
}

//exports unfilled locker numbers
export function unfilledLockers(){
  return db('lockers').select('id').where('filled', false)
}