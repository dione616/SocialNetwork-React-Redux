import React from "react"
import s from "./Pagination.module.css"

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.pages}>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => {
              props.onPageChanged(page)
            }}
            className={props.currentPage === page ? s.selectedPage : s.page}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Pagination
