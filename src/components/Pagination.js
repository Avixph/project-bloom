import React from 'react'

export const Pagination = ({postsPerpage, totalPosts}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }



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