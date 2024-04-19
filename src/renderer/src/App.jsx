import style from './App.module.css'
import SettingsToolbar from './components/SettingsToolbar'
import SongList from './components/SongList'
import Toolbar from './components/Toolbar'
import { Store } from '../data/store'
import { useEffect, useState } from 'react'
import config from '../config'

function App() {
  const [gapiReady, setGapiReady] = useState(false)
  const loadYoutubeApi = () => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/client.js'

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(config.API_KEY)
        gapi.client.load('youtube', 'v3', () => {
          setGapiReady(true)
          console.log('lol')
        })
      })
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    loadYoutubeApi()
  }, [])
  return (
    <Store>
      <div className={style.container}>
        <SettingsToolbar />
        <Toolbar />
        {/* <SongList /> */}
        {gapiReady ? <h1>gapiready</h1> : <h1>not</h1>}
      </div>
    </Store>
  )
}

export default App
