import React, { useEffect, useState } from 'react'

const ProgressBar = ({value = 0 , onComplete=()=>{}}) => {
    const[percent , setPercent] = useState(value);

    useEffect(()=>{
        setPercent(Math.min(100, Math.max(value , 0)))
    }, [value])

    if(value >= 100){
      onComplete();
    }
  return (
    
    <div className='progress'>
        <span style={{color : percent>40 ? "red" : "black"}}>{percent.toFixed()}%</span>
        <div 
        style={{transform : `scaleX(${percent/100}` , transformOrigin: "left" , width: "100%"}} 
        role='progressbar' 
        aria-valuemin={0} 
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}/>
    </div>
    
  )
}

export default ProgressBar ;