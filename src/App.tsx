import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import BooksPage from "./pages/BooksPage/BooksPage"
import Wishlist from "./pages/Wishlist/Wishlist"
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
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  )
}

export default connect(null, { fetchInitialProps })(App)
