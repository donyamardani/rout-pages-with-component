import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from './style.module.css'
import Loading from '../../Components/Loading';

export default function ProductDetails() {
  const {id}=useParams();
  const [product,setProduct]=useState();
   
  useEffect(
  ()=>{
   (async()=>{
    try {
      const res=await fetch(`https://sephora.p.rapidapi.com/products/v2/detail?id=${id}&country=SG&language=en-SG`,{
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6f917a3e55msh657525484a17534p15a129jsnc8c4f43ebe39',
		'x-rapidapi-host': 'sephora.p.rapidapi.com'
      }})
      const data=await res.json()
      setProduct(data.data)
    } catch (error) {
      console.log(error)
    }
   })()
  },[id]
  )
  return (
    <>
    {product?<div className={style.container}>
       <img src={product?.attributes['image-urls'][0]} alt={product?.attributes?.name}/>
       <div>
          <h2>{product?.attributes?.name}</h2>
          <p dangerouslySetInnerHTML={{__html:product?.attributes?.description}}></p>
          <div dangerouslySetInnerHTML={{__html:product?.attributes['how-to-text']}}></div>
         <p dangerouslySetInnerHTML={{__html:product.attributes['display-price']}}></p>
       </div>
    </div>:<Loading/>}
    </>
  )
}
