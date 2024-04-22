export function songExists(list, id) {
  let exists = true
  if (list.length == 0) return false

  list.forEach((song) => {
    if (song.id !== id) {
      exists = false
    }
  })

  return exists
}
