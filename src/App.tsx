import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import BooksPage from "./pages/BooksPage"
import { fetchInitialProps } from "./redux/reducers/booksReducer"

function App({ fetchInitialProps }: { fetchInitialProps: () => void }) {
  useEffect(() => {
    fetchInitialProps()
  }, [fetchInitialProps])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </div>
  )
}

export default connect(null, { fetchInitialProps })(App)
