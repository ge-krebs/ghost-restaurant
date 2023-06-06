import { join } from 'node:path'
import express from 'express'
import menu from './routes/menu'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/menu', menu)

export default server