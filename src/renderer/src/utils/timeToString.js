export function timeToString(secs) {
  const hours = Math.floor(secs / 3600)
  const minutes = Math.floor((secs - hours * 3600) / 60)
  const seconds = secs - hours * 3600 - minutes * 60

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}
