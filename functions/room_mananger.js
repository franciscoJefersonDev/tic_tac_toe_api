const { rooms, remove_item } = require('./stores')
const Room = require('./models/Room')

const time_count = 60000

const manager = async () => {
  for (const item of rooms) {
    const index = rooms.indexOf(item);
    if(rooms[index].time === 15 || rooms[index].time > 15) {
      const room = await Room.findOneAndDelete({ _id: rooms[index].id })
      await remove_item(rooms[index].id)
    } else {
      rooms[index].time++
    }
  }
  setTimeout(() => {
    manager()
  }, time_count)
}

manager()