import React from 'react';
import styles from '../styles/Home.module.css';

const MenuItem = ({ item }) => {
    
    return (
      <div >
        <div>
          <table className={styles.heading}>
            <tbody>
              <tr>
                <td className={styles.data}>{item.title}</td>
                <td className={styles.data}>{item.ingredients.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
       </div>
    );
};

export default MenuItem;