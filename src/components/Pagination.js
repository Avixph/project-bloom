import React from 'react'

export const Pagination = (props) => {
  const pageNumbers = [];

  console.log(props.postsPerPage);
  // console.log(totalPosts);

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <nav>
      <ul>
        {
          pageNumbers.map(number => (
            <li key={number}>
              <a href="#">
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
