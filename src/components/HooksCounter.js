import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counterActions';
import {
  incrementB,
  decrementB,
  resetB,
} from '../redux/actions/counterActionsB';

export default function HooksCounter() {
  const count = useSelector((state) => state.count);
  const countB = useSelector((state) => state.countB);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h2>Hooks CounterB</h2>
      <p>{countB}</p>
      <button onClick={() => dispatch(incrementB())}>Increment</button>
      <button onClick={() => dispatch(decrementB())}>Decrement</button>
      <button onClick={() => dispatch(resetB())}>Reset</button>
    </div>
  );
}
