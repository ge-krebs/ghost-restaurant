import express from 'express'

import * as db from '../db/db'

const router = express.Router()

//gets unfilled lockers
router.get('/', async (req, res, next) => {
  try {
    const lockers = await db.unfilledLockers()
    res.json(lockers)
  } catch (e) {
    next(e)
  }
})

//gets lockers with orders which 
router.get('/pickup', async (req, res, next) => {
  try {
    const lockerOrders = await db.getLockers()
    res.json(lockerOrders)
  } catch(e){
    next(e)
  }
})

//puts id for sql query update
router.put('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try{
    const filledLocker = await db.fillLocker(id)
    res.json(filledLocker)
  } catch(e){
    next(e)
  }
})

export default router