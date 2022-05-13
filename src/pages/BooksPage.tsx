import React, { useMemo } from "react"
import { connect } from "react-redux"

import { BooksList } from "../components/BooksList/BooksList"
import { Container } from "../components/Container/Container"
import Filters from "../components/Filters/Filters"
import { IBook, IFilters } from "../types"
import sortByField from "../utils/helpers/sortByField"
import styles from "./BooksPage.module.scss"

type BooksPageProps = {
  books?: IBook[]
  filters?: IFilters
}

const BooksPage = ({ books, filters }: BooksPageProps) => {

  const filteredBooks = useMemo(() => {
    if (!books || !filters) return []

    const allFilters = [...filters.authors, ...filters.categories]
    let filtered = books

    if (filters.authors.length || filters.categories.length) {
      filtered = filtered.filter((book) => {
        const bookFilters = [...book.authors, ...book.categories]
        for (let i = 0; i < allFilters.length; i++) {
          if (!bookFilters.includes(allFilters[i])) return false
        }
        return true
      })
    }

    if (filters.sort) {
      filtered = sortByField(filtered, "title", filters.sort)
    }

    return filtered
  }, [books, filters])

  return (
    <div>
      <Container className={styles.body}>
        <BooksList books={filteredBooks} />
        {/* @ts-ignore */}
        <Filters />
      </Container>
    </div>
  )
}

const mstp = (state: any) => {
  return {
    books: state.books.books,
    filters: state.books.filters,
  }
}

export default connect(mstp, null)(BooksPage)
