import React from "react"
import { connect } from "react-redux"

import styles from "./Filters.module.scss"
import filterRemoveSVG from "../../assets/icons/filter-remove.svg"
import arrowSVG from "../../assets/icons/arrow-next-right.svg"
import { State } from "../../redux/reducers/rootReducer"

const Filters = ({ authors, categories }: any) => {
  return (
    <div className={styles.filters}>
      <button className={styles.clearButton}>
        Clear filters <img src={filterRemoveSVG} alt="" />
      </button>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Filters</div>
        <div className={styles.list}>
          <button className={styles.filterItem}>
            Authors <img src={arrowSVG} alt="" />
          </button>
          <button className={styles.filterItem}>
            Genres <img src={arrowSVG} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Sort By</div>
        <div className={styles.list}>
          <button className={styles.sortItem}>item</button>
          <button className={styles.sortItem}>item</button>
        </div>
      </div>
    </div>
  )
}

const mstp = (state: State) => ({
  authors: state.books.authors,
  categories: state.books.categories,
})

export default connect(mstp, null)(Filters)
