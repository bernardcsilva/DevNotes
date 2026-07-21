import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { getAllNotes } from './features/notes/services/notesService'

import Dashboard from './pages/Dashboard'
import Notes from './pages/Notes'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {

  const [notes, setNotes ] = useState(() => {
    const savedNotes = localStorage.getItem("devnotes")

    if (savedNotes) {
      return JSON.parse(savedNotes)
    }

    return getAllNotes()
    
  })

  useEffect(() => {
    localStorage.setItem(
      "devnotes",
      JSON.stringify(notes)
    )
  }, [notes])

  return (
    <BrowserRouter>

      <Toaster 
        position='top-right' 
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid #334155",
            borderRadius: "12px",
            padding: "14px 18px",
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
        }}/>

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
