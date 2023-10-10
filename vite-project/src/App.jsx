import NavBar from './components/navBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'
import Episode from './components/Episode/Episode'

function App() {


  return (
    <div className="app">
      <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/episodes" element={<Episode/>} />
        </Routes>
    </div>
  )
}

export default App
