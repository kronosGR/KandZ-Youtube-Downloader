export class Song {
  constructor(id, author, url, thumbnail, title, duration, sizeTotal, sizeDownloaded) {
    this.id = id
    this.author = author
    this.url = url
    this.thumbnail = thumbnail
    this.title = title
    this.duration = duration
    this.sizeTotal = sizeTotal
    this.sizeDownloaded = sizeDownloaded
  }
}
