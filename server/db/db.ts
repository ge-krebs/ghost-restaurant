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

//gets all orders + joins menu and lockers
export function getOrdersForPickUp(){
  return db('orders')
    .select(
    'orders.name', 
    'orders.item_id', 
    'orders.locker_id',
    'orders.complete', 
    'menu.item',
    'menu.image',
    'lockers.filled'
    ).where('complete', false)
    .join(
      'menu', {'menu.id': 'orders.item_id'}
    ).join(
      'lockers', {'lockers.id': 'orders.locker_id'})
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

//gets all lockers and attaches order + memu
export function getLockers(){
  return db('lockers')
  .select(
    'lockers.id',
    'lockers.filled',
    'orders.id as order_id',
    'orders.name',
    'menu.item',
    'menu.image',
    )
  .fullOuterJoin(
    'orders', {'orders.locker_id': 'lockers.id'}
    )
  .leftOuterJoin('menu', {'menu.id': 'orders.item_id'})
}
// .where({'orders.complete': false})

//marks a locker as filled
export function fillLocker(id: number){
  return db('lockers').where({id}).update({filled: true})
}

//exports unfilled locker numbers
export function unfilledLockers(){
  return db('lockers').select('id').where('filled', false)
}

//marks order as completed and removes locker number
export function completeOrder(id: number){
  return db('orders').update({complete: true, locker_id: null}).where({id})
}