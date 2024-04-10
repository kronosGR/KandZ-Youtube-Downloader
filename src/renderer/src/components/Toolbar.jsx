import { useState } from 'react'

import { FaRegPaste } from 'react-icons/fa6'
import { MdAddCircleOutline } from 'react-icons/md'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import style from './Toolbar.module.css'
import HSpacer from './HSpacer'
import { isUrl } from '../utils/isUrl'

const Toolbar = () => {
  const [url, setUrl] = useState('')

  const handlePaste = async () => {
    const text = await window.api.getClipboardText()
    const isValidUrl = isUrl(text)
    if (isValidUrl) {
      setUrl(text)
    } else {
      alert('Not a valid URL')
    }
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
      <button type="button" disabled>
        <span className={style.textIcon}>
          <MdAddCircleOutline />
          Add URL
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
