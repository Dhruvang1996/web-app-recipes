import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import styles from '../styles/Home.module.css';

const DropdownMenuList = ({ ingredients, handleClick }) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Apply Filter</button>
      <div className={styles.dropdownContent}>
        { ingredients.length ? ingredients.map( ingredient => {
          return (
            <> 
              <DropdownMenuItem
              key = {ingredients.indexOf(ingredient)}
              ingredient = { ingredient }
              handleClick = {handleClick}
              />
              <hr/>
            </>
          )}) : ''
        }
      </div>
    </div>
  );
};

export default DropdownMenuList;
