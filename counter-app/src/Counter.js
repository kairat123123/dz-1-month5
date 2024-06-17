import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(increment(10))}>+10</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;