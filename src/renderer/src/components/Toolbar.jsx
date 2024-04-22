import { useContext, useState, useRef, useEffect } from 'react'

import { FaRegPaste } from 'react-icons/fa6'
import { MdAddCircleOutline } from 'react-icons/md'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import style from './Toolbar.module.css'
import HSpacer from './HSpacer'
import { isUrl } from '../utils/isUrl'
import { StoreContext } from '../../data/store'
import { Song } from '../../models/song'
import { extractId } from '../utils/extractId'
import config from '../../config'
import { extractYoutubeDuration } from '../utils/extractYoutubeDuration'

const Toolbar = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=7V4KRz_6_Oc')
  const [isValidUrl, setIsValidUrl] = useState(false)
  const { songList, setSongList } = useContext(StoreContext)

  const handlePaste = async () => {
    const text = await window.api.getClipboardText()
    setIsValidUrl(isUrl(text))
    if (isValidUrl) {
      setUrl(text)
    } else {
      alert('Not a valid URL')
    }
  }

  const handleAddVideo = async () => {
    const id = extractId(url)
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=id%2Csnippet%2Cplayer%2CcontentDetails&id=${id}&key=${config.API_KEY}`
    )

    const json = (await res.json()).items[0]
    const snippet = json.snippet
    console.log(json)
    const tmpSong = new Song(
      snippet.channelTitle,
      json.player.embedHtml,
      snippet.thumbnails.medium.url,
      snippet.title,
      extractYoutubeDuration(json.contentDetails.duration),
      0,
      0
    )
    setSongList([...songList, tmpSong])
  }

  return (
    <div className={style.container}>
      <button type="button" onClick={handlePaste}>
        <span className={style.textIcon}>
          <FaRegPaste />
          Paste
        </span>
      </button>
      <input
        value={url}
        disabled
        type="text"
        placeholder="http://..."
        className={style.inputUrl}
      ></input>
      <HSpacer size={100} />
      {/* disabled={!isValidUrl} */}
      <button type="button" onClick={handleAddVideo}>
        <span className={style.textIcon}>
          <MdAddCircleOutline />
          Add Video
        </span>
      </button>
      <button type="button" disabled>
        <span className={style.textIcon}>
          <PiDownloadSimpleFill />
          Download
        </span>
      </button>
    </div>
  )
}

export default Toolbar
