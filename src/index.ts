import 'dotenv/config'
import express from 'express'
import http from 'http'
import MongoDB from './database/config'
import productEvents from './modules/product/event'
import { Server, Socket } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket: Socket) => {
    productEvents(socket)
})

server.listen(process.env.API_PORT, async () => {
    const database = new MongoDB()
    await database.connect(process.env.MONGODB_STRING_CONN as string)
    console.log('API Running')
})