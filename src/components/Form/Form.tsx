import React, { useMemo } from "react"
import { Field, Formik } from "formik"
import * as Yup from "yup"
import CustomSelect from "./CustomSelect"
import styles from "./Form.module.scss"
import cn from "../../utils/helpers/combineClassnames"
import { IAuthor, IBook, ICategory } from "../../types"
import sortByField from "../../utils/helpers/sortByField"

const ValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  thumbnailUrl: Yup.string().required("Required"),
})

type FormProps = {
  authors: IAuthor[]
  categories: ICategory[]
  onSubmit: (book: any) => void
  title: string
  initialValues?: IBook
}

export const Form = ({ title, authors, categories, onSubmit, initialValues }: FormProps) => {
  const authorsOptions = useMemo(() => {
    return sortByField(
      authors.map((author) => ({ label: author.name, value: author.name })),
      "value"
    )
  }, [authors])

  const categoriesOptions = useMemo(() => {
    return sortByField(
      categories.map((categorie) => ({ label: categorie.title, value: categorie.title })),
      "value"
    )
  }, [categories])
  return (
    <Formik
      initialValues={
        initialValues || { title: "", authors: [], categories: [], thumbnailUrl: "", shortDescription: "" }
      }
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.title}>{title}</div>

          <label htmlFor="title">Title:</label>
          <input
            className={styles.field}
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && <span className={styles.error}>{errors.title}</span>}

          <label htmlFor="thumbnailUrl">Thumbnail Url:</label>
          <input
            className={styles.field}
            type="text"
            name="thumbnailUrl"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.thumbnailUrl}
          />
          {errors.thumbnailUrl && touched.thumbnailUrl && <span className={styles.error}>{errors.thumbnailUrl}</span>}

          <label htmlFor="authors">Authors:</label>
          <Field className={styles.field} name="authors" options={authorsOptions} component={CustomSelect} />
          {errors.authors && touched.authors && <span className={styles.error}>{errors.authors}</span>}

          <label htmlFor="categories">Categories:</label>
          <Field className={styles.field} name="categories" options={categoriesOptions} component={CustomSelect} />
          {errors.categories && touched.categories && <span className={styles.error}>{errors.categories}</span>}

          <label htmlFor="shortDescription">Description:</label>
          <textarea
            className={cn(styles.field, styles.textArea)}
            name="shortDescription"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.shortDescription}
          />
          <button className={styles.submit} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}
