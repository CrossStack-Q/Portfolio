import './App.css'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import ReactFrontend from './components/ReactFrontend/ReactFrontend'
import LMSProject from './components/LMS/LMSProject'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 md:py-16 lg:py-20">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/UI-UX" element={<ReactFrontend />} />
        <Route path="/lms-project" element={<LMSProject />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App