import React from 'react';
import './Searchbar.scss';
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <button><SearchIcon /></button>
  </form>
  )
}

export default Searchbar