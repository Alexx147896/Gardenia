import React from 'react';
import styles from '../styles/FrontPage.module.css';
import { Link } from 'react-router-dom';
import ProductsData from '../constants/ProductsData';

export default function Plants() {


  

  return (
    <>
      <div className={styles.title}>
        <h2>PLANTS</h2>
      </div>

      <div className={styles.container}>
        {ProductsData.plants.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link 
            to={`/${product.name}`}
            onClick={() => {
              window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
              });
          }}
            >
              <img src={`images/plants/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>

      <div className={styles.btn_container}>
        <Link 
        className={styles.btn} 
        to='/plants'
        onClick={() => {
          window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
          });
      }}
        >
          VIEW ALL
        </Link>
      </div>
    </>
  );
}