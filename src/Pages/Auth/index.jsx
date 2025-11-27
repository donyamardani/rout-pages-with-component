import React, { useState } from 'react';
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function Auth() {
  const [pageType,setPageType]=useState("SignIn")
  const handlePageType=()=>{
    setPageType(pageType=="SignIn"?"SignUp":"SignIn")
  };
  return (
    <>
    {pageType=="SignIn" ?<SignIn handlePageType={handlePageType}/>:<SignUp handlePageType={handlePageType}/>}
    </>
  )
}
