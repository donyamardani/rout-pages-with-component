import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from './style.module.css'
import Loading from '../../Components/Loading';
import { useSelector,useDispatch } from 'react-redux';
import {add,remove} from '../../Store/Slices/CartSlice'


export default function ProductDetails() {
  const {id}=useParams();
  const [product,setProduct]=useState();
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.cart?.items)?.filter(e=>e.id==id)[0].quantity
   
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
         <div>
          <button className={style.btnDanger} onClick={()=>dispatch(remove(id))}>-</button>
          {}
          <button className={style.btnSuccess} onClick={()=>dispatch(add(product))}>+</button>
         </div>
       </div>
    </div>:<Loading/>}
    </>
  )
}
