import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';


export default function ProductCard({img,des,name,price}) {
  return (
    <>
    <div className={style['prodect-card']}>
        <img src={img} alt={name} />
   
        <div>
           <h2>{name}</h2>
           <p>{des}</p>
           <span>price: ${price/100}
           <Link to={`/product-detail/${id}/${name.replaceAll(" ","-")}`}/>
           moreInformation
           </span>
        </div>
     </div>
    </>
  )
}
