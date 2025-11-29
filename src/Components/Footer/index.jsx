import React from 'react';
import 'boxicons'
import style from './style.module.css'


export default function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.text}>
        <ul>
          <li><a href="#">abute us</a></li>
          <li><a href="#">abute brands</a></li>
          <li><a href="#">abute logo</a></li>
          <li><a href="#">abute company</a></li>
        </ul>
      </div>
      <div className={style.media}>
        <ul>
          <li ><a href="#"><box-icon type='logo' name='instagram' size='md' color='white'/></a></li>
          <li ><a href="#"><box-icon type='logo' name='twitter' size='md'color='white'/></a></li>
          <li ><a href="#"><box-icon type='logo' name='facebook' size='md'color='white'/></a></li>
          <li><a href="#"><box-icon type='logo' name='telegram' size='md'color='white'/></a></li>
        </ul>
      </div>
    </div>
  )
}
