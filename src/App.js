import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  const[value , setValue] = useState(0) ;
  const[success , setSuccess] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
       setValue((val)=>val+1)
    },400)
  })

  return (
    <div className="App">
       <h1>Progress Bar</h1>
    <ProgressBar 
    value={value}
    onComplete={()=>setSuccess(true)}/>
    <span>{success ? "Complete!!!" : "Loading..."}</span>
    </div>
  );
}

export default App;
