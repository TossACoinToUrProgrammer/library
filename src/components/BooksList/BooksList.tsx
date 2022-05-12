import React from "react"
import { IBook } from "../../types"
import { Card } from "../Card/Card"
import styles from "./BooksList.module.scss"

type BooksListProps = {
  books: IBook[]
}

export const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className={styles.list}>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  )
}
