import request from 'superagent'
import { OrderList, NewOrder } from '../../models/OrderList'

export async function getOrderItems() {
  const res = await request.get('/api/v1/orders')
  if (!res.ok){
    throw new Error()
  }
  return res.body as OrderList[]
}

export async function addOrder(order: NewOrder) {
  const res = await request.post('/api/v1/orders').send(order) //send order in here
  if (!res.ok){
    throw new Error()
  }
  return res.body
}

export async function deleteOrder(id: number) {
  const res = await request.delete(`api/v1/orders/${id}`)
  if (!res.ok){
    throw new Error()
  }
  return "order" + id + " was deleted"
}

export async function getPickUpOrders(){
  const res = await request.get('api/v1/orders/pickup')
  if (!res.ok){
    throw new Error()
  }
  return res.body
}