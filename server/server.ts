import { join } from 'node:path'
import express from 'express'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/widgets', )

export default server