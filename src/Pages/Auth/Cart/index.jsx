import React from 'react'
import './style.css'
import { useDispatch,useSelector } from 'react-redux'
import {add,remove,clear} from '../../../Store/Slices/CartSlice'

export default function Cart() {
const dispatch=useDispatch();
const {items,totalPrice}=useSelector(state=>state.cart)
  return (
    <>
    
    <div className="cart-container">
      <h2 className="cart-title">cart-table</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>totalPrice</th>
            <th>add/remove</th>
          </tr>
        </thead>

        <tbody>
          {items.length > 0 ? (
            items.map((e,index) => (
              <tr key={index}>
                <td>{id}</td>

                <td>
                  <img src={e?.attributes['image-urls'][0]} alt={e?.attributes?.name} className="cart-img" />
                </td>

                <td>{e?.attributes?.name}</td>

                <td>{e?.attributes?.price/100} $</td>

                <td>{e?.quantity}</td>

                <td>{(e?.attributes?.price/100)* (e?.quantity)} $</td>

                <td>
                  <div className="actions">
                    <button
                      className="btn add"
                      onClick={() => dispatch(add(e))}
                    >
                      +
                    </button>

                    <button
                      className="btn remove"
                      onClick={() => dispatch(remove(id))}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>{totalPrice}$</td>
                
              </tr>
              
            ))
          ) : (
            <tr>
              <td colSpan="7" className="empty-text">
                سبد خرید خالی است
              </td>
            </tr>
          )}
        </tbody>
      </table>
       <button onClick={()=>dispatch(clear())}>clear cart</button>
    </div>
    </>
  )
}
