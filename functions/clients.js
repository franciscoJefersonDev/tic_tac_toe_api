const Room = require('./models/Room.js')

const connect_client = async (client_id, room_id) => {
  const room = await Room.findOneAndDelete({ _id: room_id })
  return room
}

module.exports = {
  connect_client
}