import style from './App.module.css'
import SettingsToolbar from './components/SettingsToolbar'
import SongList from './components/SongList'
import Toolbar from './components/Toolbar'
import { Store } from '../data/store'

function App() {
  return (
    <Store>
      <div className={style.container}>
        <SettingsToolbar />
        <Toolbar />
        {/* <SongList /> */}
      </div>
    </Store>
  )
}

export default App
