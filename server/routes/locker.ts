import express from 'express'

import { fillLocker, unfilledLockers } from '../db/db'

const router = express.Router()

//gets unfilled lockers
router.get('/', async (req, res, next) => {
  try {
    const lockers = await unfilledLockers()
    res.json(lockers)
  } catch (e) {
    next(e)
  }
})

//puts id for sql query update
router.put('/:id', async (req, res, next) => {
  console.log('or stuck here?')
  const id = Number(req.params.id)
  console.log(id)
  try{
    const filledLocker = await fillLocker(id)
    res.json(filledLocker)
  } catch(e){
    next(e)
  }
})

export default router