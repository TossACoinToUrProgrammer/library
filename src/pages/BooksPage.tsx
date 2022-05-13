import React from "react"
import { connect } from "react-redux"

import { BooksList } from "../components/BooksList/BooksList"
import { Container } from "../components/Container/Container"
import Filters from "../components/Filters/Filters"
import { IBook } from "../types"
import styles from "./BooksPage.module.scss"

type BooksPageProps = {
  books?: IBook[]
}

const BooksPage = ({ books }: BooksPageProps) => {
  return (
    <div>
      <Container className={styles.body}>
        <div>{books && <BooksList books={books} />}</div>
        <Filters />
      </Container>
    </div>
  )
}

const mstp = (state: any) => {
  return {
    books: state.books.books,
  }
}

export default connect(mstp, null)(BooksPage)
