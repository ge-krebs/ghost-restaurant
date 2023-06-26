import request from 'superagent'
import { OrderList, NewOrder } from '../../models/OrderList'

//--FRONTEND ORDER API FUNCTIONS--//

export async function getOrderItems() {
  const res = await request.get('/api/v1/orders')
  if (!res.ok) {
    throw new Error()
  }
  return res.body as OrderList[] //all order items
}

export async function addOrder(order: NewOrder) {
  const res = await request.post('/api/v1/orders').send(order) //send order in here
  if (!res.ok) {
    throw new Error()
  }
  return res.body //adds order
}

export async function deleteOrder(id: number) {
  const res = await request.delete(`api/v1/orders/${id}`) //deletes an order by ID
  if (!res.ok) {
    throw new Error()
  }
  return res.status(200)
}

export async function getPickUpOrders() {
  const res = await request.get('api/v1/orders/pickup')
  if (!res.ok) {
    throw new Error()
  }
  return res.body //gets all open orders (not complete)
}

export async function completeOrder(id: number) {
  const res = await request.put(`/api/v1/orders/completeOrder/${id}`)
  if (!res.ok) {
    throw new Error()
  }
  return res.status(200)
}
