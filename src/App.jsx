import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import Research from './pages/Research'
import Publications from './pages/Publications'
import Members from './pages/Members'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  const basename = import.meta.env.PROD ? '/diplab/' : '/'
  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/research" element={<Research />} /> */}
            <Route path="/publications" element={<Publications />} />
            <Route path="/members" element={<Members />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
