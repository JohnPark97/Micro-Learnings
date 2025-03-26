import { useEffect } from '@lynx-js/react'

import './App.css'
import { MainPane } from './components/MainPane/MainPane.jsx'

export function App() {

  useEffect(() => {
  }, [])

  return (
    <view className='App'>
      <MainPane/>
    </view>
  )
}
