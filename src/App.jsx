import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Notes from './pages/Notes'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>

        <Route path='/notes' element={<Notes/>}/>

        <Route path='/favorites' element={<Favorites/>}/>

        <Route path='/profile' element={<Profile/>}/>

        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
