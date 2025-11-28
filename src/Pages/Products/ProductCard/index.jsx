import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';


export default function ProductCard({id,img,des,name,price}) {
  return (
    <>
    <div className={style['product-card']}>
        <img src={img} alt={name} />
   
        <div>
           <h2>{name.split(' ').slice(0,2).join(' ')}</h2>
           <p>{des.split(' ').slice(0,10).join(' ')}</p>
           <span>price: ${price/100}
           <Link to={`/ProductDetails/${id}/${name.replaceAll(" ","-")}`}>
           moreInformation
           </Link>
           </span>
        </div>
     </div>
    </>
  )
}
