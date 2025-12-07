import React from 'react'
import style from './style.css'
import { useDispatch,useSelector } from 'react-redux'
import {add,remove,clear} from '../../Store/Slices/CartSlice'

export default function Cart() {
const dispatch=useDispatch();
const {items,totalPrice}=useSelector((state)=>state.cart);
  const tableItem=items?.map((e,index)=><tr key={index}>
    <td>
      <img
        src={e?.attributes['image-urls'][0]}
        className="product-image"
      />
    </td>
    <td>{e?.attributes?.name}</td>
    <td>${e?.attributes?.price/100}</td>
    <td>{e?.quantity}</td>
    <td>${(e?.attributes?.price/100)*e?.quantity}</td>
    <td>
      <button
        className="action-btn add-btn"
        onClick={() => dispatch(add(e))}
      >
        Add
      </button>
      <button
        className="action-btn remove-btn"
        onClick={() => dispatch(remove(e.id))}
      >
        Remove
      </button>
    </td>
  </tr>)
  return (
    <>
      {items.length > 0 ? (
        <div className="table-container">
          <h2 className="table-heading">Product Table</h2>
          <table id="productTable" className="styled-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {tableItem}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="grand-total-label">
                  Grand Total
                </td>
                <td colSpan="2" className="grand-total">
                    ${totalPrice}
                </td>
              </tr>
            </tfoot>
          </table>
          <button onClick={()=>dispatch(clear())}>clear cart</button>
        </div>
      ) : (
        <h2>cart is empty<box-icon type='solid' name='cart' color='white' size='md' animation="tada"></box-icon></h2>
      )}
    </>
  );
}
