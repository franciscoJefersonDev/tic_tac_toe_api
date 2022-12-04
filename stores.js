let rooms = []
const remove_item = async (item) => {
  rooms = rooms.filter((filtered) => filtered.id !== item)
}
module.exports = {
  rooms,
  remove_item
}