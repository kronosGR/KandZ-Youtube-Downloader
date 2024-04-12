import style from './Song.module.css'
const Song = ({ song }) => {
  return (
    <div className={style.container}>
      <img src={song.thumbnail} alt={song.title} className={style.thumbnail} />
      <div>
        <span className={style.title}>{song.title}</span>
        <span className={style.author}>{song.author}</span>
      </div>
    </div>
  )
}

export default Song
