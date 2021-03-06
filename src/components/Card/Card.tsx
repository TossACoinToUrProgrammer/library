import React from "react"
import { useNavigate } from "react-router-dom"

import { IBook } from "../../types"
import styles from "./Card.module.scss"
import heartThinSVG from "../../assets/icons/heart-thin.svg"
import heartSVG from "../../assets/icons/red-heart.svg"
import editSVG from "../../assets/icons/edit-square.svg"
import deleteSVG from "../../assets/icons/delete.svg"

type CardProps = {
  book: IBook
  addToWishlist: () => void
  deleteBook: () => void
}

export const Card = ({ book, addToWishlist, deleteBook }: CardProps) => {
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={book.thumbnailUrl} alt="" />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.author}>{book.authors.join(", ")}</div>
      </div>
      <div className={styles.modal}>
        <u>Description:</u>
        {(book.shortDescription || book.longDescription)?.slice(0, 200)}
        <br />
        <br />
        <u>Categories:</u>
        {book.categories.join(", ")?.slice(0, 100)}
        <div className={styles.toolbar}>
          <button onClick={addToWishlist}>
            <img src={book.isFav ? heartSVG : heartThinSVG} alt="" />
          </button>
          <button onClick={() => navigate(`/edit/${book.id}`)}>
            <img src={editSVG} alt="" />
          </button>
          <button onClick={deleteBook}>
            <img src={deleteSVG} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
