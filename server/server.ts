import { join } from 'node:path'
import express from 'express'
import menu from './routes/menu'
import orders from './routes/orders'
import locker from './routes/locker'

const server = express()
server.use(express.json())

server.use('/api/v1/menu', menu)
server.use('/api/v1/orders', orders)
server.use('/api/v1/locker', locker)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(join(__dirname, '../assets')))
  server.use('/', express.static(join(__dirname, '../public')))
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../index.html'))
  })
}

export default server
