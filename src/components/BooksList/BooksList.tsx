import React from "react"
import { connect } from "react-redux"
import { addToWishlist, deleteBook } from "../../redux/reducers/booksReducer"
import { IBook } from "../../types"
import { Card } from "../Card/Card"
import styles from "./BooksList.module.scss"

type BooksListProps = {
  books: IBook[]
  addToWishlist: (id: string) => void
  deleteBook: (id: string) => void
}

const BooksList = ({ books, addToWishlist, deleteBook }: BooksListProps) => {
  return (
    <div className={styles.list}>
      {books.map((book) => (
        <Card
          key={book.id}
          book={book}
          addToWishlist={() => addToWishlist(book.id)}
          deleteBook={() => deleteBook(book.id)}
        />
      ))}
    </div>
  )
}

export default connect(null, { addToWishlist, deleteBook })(BooksList)
