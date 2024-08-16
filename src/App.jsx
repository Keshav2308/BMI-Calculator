import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(48);

  function onWeightChange(e){
    setWeight(e.target.value);
  }
  function onHeightChange(e){
    setHeight(e.target.value);
  }

  const output = useMemo(()=>{
    const calculateHeight = height/100;

    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  return (
    <main>
    <div>
      <h1>Body Mass Index Calculator</h1>
      <div className='input-section'>
        <p 
        className='slider-output'>Weight:{weight}KG</p>
        <input className='input-slider' type='range' step="1" min="30" max="200"  
        onChange={onWeightChange}
        />
        <p className='slider-output'>Height : {height}cm</p>
        <input className='input-slider' type="range" 
        max="220" min="140"
        onChange={onHeightChange}
        />
        <div className='output-section'>
          <p>Your BMI is</p>
          <p className='output'>{output}</p>
        </div>
      </div>
    </div>
    </main>
  )
}

export default App
