import React from "react"
import { connect } from "react-redux"
import { Container } from "../../components/Container/Container"
import { Form } from "../../components/Form/Form"
import { addBook } from "../../redux/reducers/booksReducer"
import { RootState } from "../../redux/reducers/rootReducer"
import { IAuthor, IBook, ICategory } from "../../types"

type AddBookPageProps = {
  authors?: IAuthor[]
  categories?: ICategory[]
  addBook: (b: IBook) => void
}

const AddBookPage = ({ authors, categories, addBook }: AddBookPageProps) => {
  const onSubmit = (values: any) => addBook({ ...values, id: new Date().getTime() + "" })
  return (
    <Container>
      {authors && categories && <Form title="Add Book" authors={authors} categories={categories} onSubmit={onSubmit} />}
    </Container>
  )
}

const mstp = (state: RootState) => ({
  authors: state.books.authors,
  categories: state.books.categories,
})

export default connect(mstp, { addBook })(AddBookPage)
