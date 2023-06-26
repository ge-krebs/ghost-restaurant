import express from 'express'

import * as db from '../db/db'

const router = express.Router()

//gets all orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await db.getOrders()
    res.json(orders)
  } catch (e) {
    next(e)
  }
})

//gets incomplete orders (for pickup)
router.get('/pickup/', async (req, res, next) => {
  try {
    const orders = await db.getOrdersForPickUp()
    res.json(orders)
  } catch (e) {
    next(e)
  }
})

//places a new order
router.post('/', async (req, res, next) => {
  try {
    const placeOrder = await db.newOrder(req.body)
    res.json(placeOrder)
  } catch (e) {
    next(e)
  }
})

//deletes an order by id
router.delete('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const deletedOrder = await db.deleteOrder(id)
    res.json(deletedOrder)
  } catch (e) {
    next(e)
  }
})

//marks order as complete
router.put('/completeOrder/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    await db.completeOrder(id)
    res.status(200)
  } catch (e) {
    next(e)
  }
})

export default router
