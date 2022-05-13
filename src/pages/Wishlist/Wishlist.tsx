import React from "react"
import { connect } from "react-redux"
import BooksList from "../../components/BooksList/BooksList"
import { Container } from "../../components/Container/Container"
import { RootState } from "../../redux/reducers/rootReducer"
import { IBook } from "../../types"

type WishlistProps = {
  books?: IBook[]
}

const Wishlist = ({ books }: WishlistProps) => {
  return (
    <Container>
      {books?.length === 0 && <h3>There are no books in the wishlist yet</h3>}
      {books && <BooksList books={books} />}
    </Container>
  )
}

const mstp = (state: RootState) => ({
  books: state.books.books.filter((el) => el.isFav),
})

export default connect(mstp, null)(Wishlist)
