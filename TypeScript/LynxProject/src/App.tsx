import './App.css'
import { useEffect, useState } from '@lynx-js/react'
import { CardType } from './components/Card/Card.jsx'
import { CardBox } from './components/CardBox/CardBox.jsx'

export function App() {
  useEffect(() => {}, [])

  return (
    <view className='App'>
      <CardBox/>
    </view>
  )
}
