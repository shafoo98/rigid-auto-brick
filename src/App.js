import { Routes, Route } from 'react-router-dom'
import About from './components/about'
import Gallery from './components/gallery'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Success from './components/success'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Hero />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='success' element={<Success />} />
      </Route>
    </Routes>
  )
}

export default App
