import { IBook } from "../../types"

const getBooksNumberBy = (books: IBook[], field: "authors" | "categories", title: string) => {
  return books.reduce((acc, curr) => {
    if (curr[field].includes(title)) return acc + 1
    return acc
  }, 0)
}

export default getBooksNumberBy
