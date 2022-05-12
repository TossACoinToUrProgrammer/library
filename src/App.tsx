import React from "react"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import BooksPage from "./pages/BooksPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </div>
  )
}

export default App
