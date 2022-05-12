import React from "react"
import { IBook } from "../../types"
import styles from "./Card.module.scss"

type CardProps = {
  book: IBook
}

export const Card = ({ book }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={book.thumbnailUrl} alt="" />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.author}>{book.authors.join(", ")}</div>
      </div>
    </div>
  )
}
