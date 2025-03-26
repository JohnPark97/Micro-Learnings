import './App.css'
import { useEffect } from '@lynx-js/react'
import { BibleList } from './components/BibleList/BibleList.jsx'

export function App() {
  // Dynamically set the viewport meta tag
  useEffect(() => {}, []);

  return (
      <view className='App'>
          <BibleList />
      </view>
  )
}

