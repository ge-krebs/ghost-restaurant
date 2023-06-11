import express from 'express'

import { fillLocker } from '../db/db'

const router = express.Router()

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