import { Routes, Route } from 'react-router-dom'
import About from './components/about'
import Gallery from './components/gallery'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Contact from './components/contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Hero />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
