import React, { useMemo } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { Container } from "../../components/Container/Container"
import { Form } from "../../components/Form/Form"
import { updateBook } from "../../redux/reducers/booksReducer"
import { RootState } from "../../redux/reducers/rootReducer"
import { IAuthor, IBook, ICategory } from "../../types"

type EditPageProps = {
  authors?: IAuthor[]
  categories?: ICategory[]
  books: IBook[]
  updateBook: (b: IBook) => void
}

const EditPage = ({ authors, categories, books, updateBook }: EditPageProps) => {
  const params = useParams()
  const book = useMemo(() => books.find((el) => el.id === params.bookId), [books, params])
  return (
    <Container>
      {authors && categories && book && (
        <Form title="Edit Book" authors={authors} categories={categories} onSubmit={updateBook} initialValues={book} />
      )}
    </Container>
  )
}

const mstp = (state: RootState) => ({
  authors: state.books.authors,
  categories: state.books.categories,
  books: state.books.books,
})

export default connect(mstp, { updateBook })(EditPage)
