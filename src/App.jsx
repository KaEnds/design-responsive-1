import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarx from './Component/Navbar'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbarx />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
