import { useContext } from 'react'

import style from './SongList.module.css'
import { StoreContext } from '../../data/store'
import Song from './Song'

const SongList = () => {
  const { songList } = useContext(StoreContext)
  return (
    <div className={style.container}>
      {songList.map((item, index) => (
        <Song song={item} aa={index} key={index} />
      ))}
    </div>
  )
}

export default SongList
