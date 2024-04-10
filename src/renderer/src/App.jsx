import style from './App.module.css'
import SettingsToolbar from './components/SettingsToolbar'
import Toolbar from './components/Toolbar'
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className={style.container}>
      <SettingsToolbar />
      <Toolbar />
    </div>
  )
}

export default App
