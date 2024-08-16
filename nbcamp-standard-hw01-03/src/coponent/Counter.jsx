import React from 'react'

const Counter = ({count, setCount}) => {
    
    const increment = () => {
        if(count >= 5){
            count = -1;
        }
        return setCount(count + 1);
    };

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>클릭!</button>
    </div>
  )
}

export default Counter;