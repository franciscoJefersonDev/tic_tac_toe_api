const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
// const ServerlessHttp = require('serverless-http')
const router = require('./routes')
require('./bd')
require('./room_mananger')

const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())
// app.use(router)
app.use('/', router)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

io.on('connection', async (socket) => {
  // socket.on('disconnect', async (event) => {
  //   const room = await Room.findOneAndDelete({ createdBy: socket.id })
  // })
})

// module.exports.handler = ServerlessHttp(app)
server.listen(process.env.PORT || '3333')