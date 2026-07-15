import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { getAllNotes } from './features/notes/services/notesService'

import Dashboard from './pages/Dashboard'
import Notes from './pages/Notes'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {

  const [notes, setNotes ] = useState(getAllNotes())

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard notes={notes}/>}/>

        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes}/>}/>

        <Route path='/favorites' element={<Favorites notes={notes} setNotes={setNotes}/>}/>

        <Route path='/profile' element={<Profile/>}/>

        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
