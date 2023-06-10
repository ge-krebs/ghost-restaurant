import express from 'express'

import { getOrders } from '../db/db'

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

export default router