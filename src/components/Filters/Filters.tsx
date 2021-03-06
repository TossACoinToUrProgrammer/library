import React, { useMemo, useState } from "react"
import { connect } from "react-redux"

import styles from "./Filters.module.scss"
import { RootState } from "../../redux/reducers/rootReducer"
import { IFilters, IAuthor, ICategory } from "../../types"
import cn from "../../utils/helpers/combineClassnames"
import sortByField from "../../utils/helpers/sortByField"
import { setFilters } from "../../redux/reducers/booksReducer"
import arrowSVG from "../../assets/icons/arrow-next-right.svg"
import sortPNG from "../../assets/icons/sort.png"
import sortReversePNG from "../../assets/icons/sort-reverse.png"

type FiltersProps = {
  authors: IAuthor[]
  categories: ICategory[]
  filters: IFilters
  setFilters: (p: IFilters) => void
}

type FilterList = {
  title: string
  items: {
    title: string
    books: number
  }[]
  key: "categories" | "authors"
}

const Filters = ({ authors, categories, filters, setFilters }: FiltersProps) => {
  const [currentFilterList, setCurrentFilterList] = useState<null | number>(null)
  const filterLists = useMemo<FilterList[]>(
    () => [
      {
        title: "Authors",
        items: sortByField(authors, "name").map((item) => ({ title: item.name, books: item.books })),
        key: "authors",
      },
      { title: "Categories", items: sortByField(categories, "title"), key: "categories" },
    ],
    [authors, categories]
  )

  const filterClickHandler = (key: "categories" | "authors", value: string) => {
    const newFilters = { ...filters }
    if (newFilters[key].includes(value)) {
      newFilters[key] = newFilters[key].filter((el) => el !== value)
    } else newFilters[key].push(value)
    setFilters(newFilters)
  }

  const sortClickHandler = (value: any) => {
    setFilters({ ...filters, sort: value })
  }

  const resetFilters = () => {
    setFilters({ ...filters, categories: [], authors: [] })
  }

  const resetSort = () => {
    setFilters({ ...filters, sort: null })
  }

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.filters}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Filters
            <span className={styles.reset} onClick={resetFilters}>
              reset
            </span>
          </div>
          <div className={styles.list}>
            {filterLists.map((filter, index) => (
              <button className={styles.filterButton} key={filter.title} onClick={() => setCurrentFilterList(index)}>
                {filter.title} <img src={arrowSVG} alt="" />
              </button>
            ))}
            <div className={cn(styles.drawer, currentFilterList !== null ? styles.drawerOpen : "")}>
              <div className={styles.drawerCloseButton} onClick={() => setCurrentFilterList(null)}>
                <img src={arrowSVG} alt="" />
              </div>
              {currentFilterList !== null && (
                <>
                  <div className={cn(styles.drawerTitle, styles.sectionTitle)}>
                    {filterLists[currentFilterList].title}
                  </div>
                  <div className={styles.filtersList}>
                    {filterLists[currentFilterList].items.map((item) => (
                      <div
                        key={item.title}
                        className={cn(
                          styles.filter,
                          filters[filterLists[currentFilterList].key].includes(item.title) ? styles.activeFilter : ""
                        )}
                        onClick={() => filterClickHandler(filterLists[currentFilterList].key, item.title)}
                      >
                        {item.title} <span>{item.books}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Sort By
            <span className={styles.reset} onClick={resetSort}>
              reset
            </span>
          </div>
          <div className={styles.list}>
            <button
              className={cn(styles.sortButton, filters.sort === 1 ? styles.activeSort : "")}
              onClick={() => sortClickHandler(1)}
            >
              <img src={sortPNG} alt="" />
            </button>
            <button
              className={cn(styles.sortButton, filters.sort === -1 ? styles.activeSort : "")}
              onClick={() => sortClickHandler(-1)}
            >
              <img src={sortReversePNG} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mstp = (state: RootState) => ({
  authors: state.books.authors,
  categories: state.books.categories,
  filters: state.books.filters,
})

export default connect(mstp, { setFilters })(Filters)
