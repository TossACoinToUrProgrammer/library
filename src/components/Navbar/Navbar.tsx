import React from "react"
import { Link, useLocation } from "react-router-dom"
import cn from "../../utils/helpers/combineClassnames"
import { Container } from "../Container/Container"
import styles from "./Navbar.module.scss"

const links = [
  {
    path: "/",
    title: "Books",
  },
  {
    path: "/wishlist",
    title: "Wishlist",
  },
  {
    path: "/add-book",
    title: "Add Book",
  },
]

export const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              to={link.path}
              className={cn(styles.link, pathname === link.path ? styles.active : "")}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
