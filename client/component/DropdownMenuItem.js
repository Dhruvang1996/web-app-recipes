import React, {useState} from 'react';

const DropdownMenuItem = ({ ingredient, handleClick }) => {
  return (
    <div >
      <p onClick={handleClick}>{ingredient}</p>  
    </div>
  );
};

export default DropdownMenuItem;
