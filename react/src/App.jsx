import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';
import Navbar from './components/Navbar';

function App() {
  const name="abc";
  const age = 23;
  const marks=[78,87,56,98,45];
  return (
    <>
    <Hello name={name} age={age} marks={marks} />
    <Navbar />    
  
    
    
    </>
  );
}

export default App
