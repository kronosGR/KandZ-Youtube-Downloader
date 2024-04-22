import { timeToString } from '../utils/timeToString'
import style from './Song.module.css'
const Song = ({ song, aa }) => {
  return (
    <div className={style.container}>
      <div className={style.aa}>{aa}</div>
      <img src={song.thumbnail} alt={song.title} className={style.thumbnail} />
      <div>
        <span className={style.title}>{song.title}</span>
        <span className={style.author}>{song.author}</span>
        <span className={style.duration}>{timeToString(song.duration)}</span>
      </div>
    </div>
  )
}

export default Song
