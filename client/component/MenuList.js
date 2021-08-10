import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ filteredMenu }) => {
  return (
    <div>
      <div>
        { filteredMenu.length ? filteredMenu.map( (item) => {
          return (
            <> 
              <MenuItem
              key = { item._id }
              item = { item }
              />
              <hr/>
            </>
          )}) : ''
        }
      </div>
    </div>
  );
};

export default MenuList;
