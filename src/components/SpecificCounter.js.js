import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newCount } from '../redux/actions/counterActions';

export default function SpecificCounter() {
  const [num, setNum] = useState(0);

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    return setNum(value);
  };

  return (
    <div>
      <h2>Specific Counter</h2>
      <p>{count}</p>
      <input type="text" onChange={handleChange} value={num}></input>
      <button onClick={() => dispatch(newCount(num))}>Submit</button>
    </div>
  );
}
