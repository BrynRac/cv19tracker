import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counterActions';
import {
  incrementB,
  decrementB,
  resetB,
} from '../redux/actions/counterActionsB';

function Counter({
  count,
  increment,
  decrement,
  reset,
  incrementB,
  decrementB,
  resetB,
  countB
}) {
  return (
    <div className="Counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <h2>CounterB</h2>
      <p>{countB}</p>
      <button onClick={incrementB}>Increment</button>
      <button onClick={decrementB}>Decrement</button>
      <button onClick={resetB}>Reset</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    countB: state.countB,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  incrementB,
  decrementB,
  resetB,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
