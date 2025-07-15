import React, { useState } from 'react'

const Calculator = () => {
    const [input,setInput] = useState('');
    
    console.log(input);
    
    const handleClick = (value) => {
          if(value === 'c'){
            setInput('');
          }else if(value === '='){
            try{
                setInput(eval(input).toString());
            }catch {
                setInput('Error');
            }
          }else {
            setInput(input + value);
          }
    }

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'c', '0', '=', '+',
    ];
  return (
    <div className='calculator'>
        <div className="display">
            {input || '0'}
        </div>
        <div className="buttons">
            {buttons.map((btn)=>(
                <button key={btn} onClick={()=>handleClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Calculator;