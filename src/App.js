import React,{ useState, useEffect } from 'react'
import './App.css';
import Ccomp from './Ccomp';
import {Fcomp} from './Fcomp';

export const App = () => {
  const[name,setname]=useState('in class component render method is present');
  const changeMethod=()=>{
      setname('in funtional component render method is not present ')
  }
  return (
    <>
    <div>App</div>
    <button onClick={changeMethod}>changename</button>
    </>
  )
}

