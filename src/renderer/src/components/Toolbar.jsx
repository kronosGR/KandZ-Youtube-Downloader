import { useContext, useState } from 'react'

import { FaRegPaste } from 'react-icons/fa6'
import { MdAddCircleOutline } from 'react-icons/md'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import style from './Toolbar.module.css'
import HSpacer from './HSpacer'
import { isUrl } from '../utils/isUrl'
import { StoreContext } from '../store'

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
    // download video info
    const response = await fetch('https://www.youtube.com/oembed?format=json&url=' + url)
    const info = await response.json()
    setSongList([...songList, info])
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
