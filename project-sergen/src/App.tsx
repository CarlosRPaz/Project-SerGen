import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Sernums from './pages/Sernums'
import './scss/main.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/sernums" element={<Sernums />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App