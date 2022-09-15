import React from 'react';
import './Sidebar.scss';
import {categories} from '../../utils/constants';

const Sidebar = ({selectedCategory , setSelectedCategory}) => {
  return (
   
        <aside className='app__sidebar'>
            <nav>
                {categories.map((category) => (
                    <button className={`${selectedCategory === category.name && 'active'} app__sidebar-category`} key={category.name}  onClick={() => setSelectedCategory(category.name)}>
                        <i className='app__sidebar-category-icon'>{category.icon}</i>
                        <span className='app__sidebar-category-name'>{category.name}</span>
                    </button>
                ))}
            </nav>
        </aside>
  )
}

export default Sidebar;