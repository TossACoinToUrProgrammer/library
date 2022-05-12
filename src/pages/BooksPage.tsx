import React, { useEffect } from "react"
import { connect } from "react-redux"

import { BooksList } from "../components/BooksList/BooksList"
import { Container } from "../components/Container/Container"
import { fetchBooks } from "../redux/reducers/booksReducer"
import { IBook } from "../types"

type BooksPageProps = {
  books?: IBook[]
  fetchBooks: () => void
}

const BooksPage = ({ books, fetchBooks }: BooksPageProps) => {
  useEffect(() => {
    if (!books || !books.length) fetchBooks()
  }, [books, fetchBooks])

  return (
    <div>
      <Container>{books && <BooksList books={books} />}</Container>
    </div>
  )
}

const mstp = (state: any) => {
  return {
    books: state.books.books,
  }
}

export default connect(mstp, { fetchBooks })(BooksPage)
