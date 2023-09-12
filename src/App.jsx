import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <Link to={'/login'}>CLICK TO GO TO LOGIN</Link>
    </>
  )
}

export default App
