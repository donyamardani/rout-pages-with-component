import React from 'react';
import { HashLoader } from 'react-spinners';
import style from './style.module.css'

export default function Loading() {
  return (
    <>
    <div className={style.loading}>
        <HashLoader size={150} color="white"/>
        </div>
    </>
  )
}
