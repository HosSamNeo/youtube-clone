import React , {useState} from 'react';
import './Searchbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button><SearchIcon /></button>
  </form>
  )
}

export default Searchbar