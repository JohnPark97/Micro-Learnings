import { root } from '@lynx-js/react'

import { App } from './App.js'
import { MemoryRouter, Routes, Route } from 'react-router'
import { ChapterSelect } from './components/ChapterSelect/ChapterSelect.jsx'

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="books/:key" element={<ChapterSelect />}/>
    </Routes>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
