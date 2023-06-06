import express from 'express'

import { getMenuItems } from '../db/db'

const router = express.Router()

//gets all menu items
router.get('/', async (req, res, next) => {
  try {
    const menu = await getMenuItems()
    res.json(menu)
  } catch (e) {
    next(e)
  }
})

export default router
