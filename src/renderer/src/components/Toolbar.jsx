import { FaRegPaste } from 'react-icons/fa6'
import { MdAddCircleOutline } from 'react-icons/md'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import style from './Toolbar.module.css'
import HSpacer from './HSpacer'

const Toolbar = () => {
  return (
    <div className={style.container}>
      <button type="button">
        <span className={style.textIcon}>
          <FaRegPaste />
          Paste
        </span>
      </button>
      <input type="text" placeholder="http://..." className={style.inputUrl}></input>
      <HSpacer size={100} />
      <button type="button">
        <span className={style.textIcon}>
          <MdAddCircleOutline />
          Add URL
        </span>
      </button>
      <button type="button">
        <span className={style.textIcon}>
          <PiDownloadSimpleFill />
          Download
        </span>
      </button>
    </div>
  )
}

export default Toolbar
