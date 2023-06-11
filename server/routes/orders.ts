import express from 'express'

import { getOrders, newOrder, deleteOrder } from '../db/db'

const router = express.Router()

//gets all orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await getOrders()
    res.json(orders)
  } catch(e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const placeOrder = await newOrder(req.body)
    res.json(placeOrder)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req,res,next) => {
  const id = Number(req.params.id)
  try{
    const deletedOrder = await deleteOrder(id)
    res.json(deletedOrder)
  } catch(e){
    next(e)
  }
})

export default router