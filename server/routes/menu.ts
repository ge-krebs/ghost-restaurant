import express from 'express'

import * as db from '../db/db'

const router = express.Router()

//gets all menu items
router.get('/', async (req, res, next) => {
  try {
    const menu = await db.getMenuItems()
    res.json(menu)
  } catch (e) {
    next(e)
  }
})

//deletes a menu item
router.delete('/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    await db.deleteMenuItem(id)
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

//adds a menu item
router.post('/', async (req, res, next) => {
  const data = { ...req.body }
  console.log(data)
  try {
    await db.addMenuItem(data)
    res.json(data)
  } catch (e) {
    next(e)
  }
})

export default router
