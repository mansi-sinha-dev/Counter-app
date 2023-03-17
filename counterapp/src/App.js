import React, { useState} from 'react';
import './App.css';

function App() {

  const[count, setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }
  function incrementHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0); 
  }

  return (
    <div className='flex flex-col justify-center items-center bg-[#00bf8f] bg-gradient-to-r from-[#05241d] to-[#00bf8f] w-[100vw] h-[100vh] gap-10  text-white' >
      <div className='text-3xl font-medium'>
        Increment & Decrement
      </div>
      <div className=' bg-white flex flex-row text-black justify-center gap-12 py-3 rounded-sm text-[25px] '>
        <button onClick={decrementHandler} className='border-r-2 w-20 text-center text-5xl text-[#8a8686]'>
          -
        </button>
        <div className=' font-bold text-center gap-12 text-5xl text-[#fffff]'>{count}</div>
        <button onClick={incrementHandler} className='border-l-2 w-20 text-center text-5xl text-[#8a8686]'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='bg-[#073d31] px-5 py-2 rounded-sm text-lg'>
        RESET
      </button>
    </div>
  );
}

export default App;
