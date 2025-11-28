import React, { useEffect } from 'react';
import style from './style.module.css';
import { HashLoader } from 'react-spinners';
import { useState } from 'react';
import ProductCard from './ProductCard'

export default function Products() {
const [products,setProducts]=useState()
useEffect(()=>{
  (async()=>{
    try {
      const res=await fetch('https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales',{
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6f917a3e55msh657525484a17534p15a129jsnc8c4f43ebe39',
		'x-rapidapi-host': 'sephora.p.rapidapi.com'}
  })
      const data=await res.json()
      setProducts(data.data)
    } catch (error) {
      console.log(error)
    }
  })()
},[]);
const items=products.map((e,index)=><ProductCard key={index} id={e?.id} des={e?.attributes?.description} img={e?.attributes["image-url"][0]} name={e?.attribute?.name} price={e?.attribute?.price}/>)
  return (
    <>
    <div className={style.container}>
      {products
      ?<div className={style.container}>
        {items}
        </div>
      :<div className={style.loding}>
        <HashLoader size={150} color="white"/>
        </div>}
    </div>
    </>
  )
}
