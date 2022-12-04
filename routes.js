const express = require('express')
const Room = require('./models/Room')
const { rooms } = require('./stores')
const { connect_client } = require('./clients')

const router = express.Router()

router.get('/test', async (request, response) => {
  try {
    return response.status(200).json({msg: 'API running...'})
  } catch (error) {
    return response.status(400).json(
      {
        error,
        msg: 'API not running'
      }
    )
  }
})

router.post('/create-room', async (request, response) => {
  try {
    const client = request.body.client
    const room = await Room.create({
      createdBy: client,
      player1: client,
      player2: '',
      A: '',
      B: '',
      C: '',
      D: '',
      E: '',
      F: '',
      G: '',
      H: '',
      I: '',
    })
    rooms.push({
      id: room._id.toString(),
      time: 0
    })
    return response.status(200).json({data: room})
  } catch (error) {
    return response.status(400).json(
      {
        error,
        msg: 'Unexpected error!'
      }
    )
  }
})
router.post('/connect-client', async(request, response) => {
  try {
    const client_id = request.body.client_id
    const room_id = request.body.room_id
    const connected = await connect_client(client_id, room_id)
    if(connected) {
      return response.status(200).json({ data: connected, msg: 'Connected with success'})
    }
    return response.status(400).json(
      {
        msg: 'Not possible connect in room!'
      }
    )
  } catch(error) {
    return response.status(400).json(
      {
        error,
        msg: 'Unexpected error!'
      }
    )
  }
})

/*
  CONNECT CLIENT WITH API
  RETURNS A TOKEN IDENTIFYING THE CLIENT
*/

module.exports = router