import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import logo from '../../utils/youtube-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Searchbar } from '../../components';

const Navbar = ({setIsSidebar , isSidebar}) => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-left'>
        <MenuIcon onClick={() => setIsSidebar(!isSidebar)}/>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Searchbar />
      <div className='app__navbar-right'>
        <button>
          <a href="https://www.linkedin.com/in/hossam-eldin-ashraf-37253221b/" target='_blank' rel='noreferrer'>Portfolio</a>
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar;