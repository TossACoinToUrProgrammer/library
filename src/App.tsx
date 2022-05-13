import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import AddBookPage from "./pages/AddBookPage/AddBookPage"
import BooksPage from "./pages/BooksPage/BooksPage"
import EditPage from "./pages/EditPage/EditPage"
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
        {/* @ts-ignore */}
        <Route path="/add-book" element={<AddBookPage />} />
        {/* @ts-ignore */}
        <Route path="/edit/:bookId" element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default connect(null, { fetchInitialProps })(App)
