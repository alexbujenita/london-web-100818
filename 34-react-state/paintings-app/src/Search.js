import React from 'react'

const Search = props =>
  <input
    onChange={event => props.handleChange(event.target.value)}
    placeholder='search by title...'
  />

export default Search
