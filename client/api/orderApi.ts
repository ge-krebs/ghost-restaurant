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