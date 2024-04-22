import { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext({ songList: [], setSongList: () => {} })
export const Store = ({ children }) => {
  const [songList, setSongList] = useState([])

  const store = {
    songList: songList,
    setSongList: setSongList
  }

  useEffect(() => {
    // console.log(songList)
  }, [songList])

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
