import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form className='search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
      <input onChange={(e) => {
        setSearch(e.target.value)
        setPageNumber(1);
      }}
        type="text" name="" id="" className='input' placeholder="Buscar personaje" />
      <button onClick={searchBtn} className='btn btn-primary fs-5'>Search</button>
    </form>
  )
}

export default Search

//shortcut : rafce