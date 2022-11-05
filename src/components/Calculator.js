import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const state = {
    total: null,
    next: null,
    operation: null,
    className: 'orange',
    colSpan: 2,
  };

  const [now, toggle] = useState(state);

  const computeFunction = (e) => {
    toggle((now) => calculate(now, e.target.name));
  };

  // Destructuring state
  const {
    total, next, operation, className, colSpan,
  } = now;
  return (
    <div className="panel">
      <table>
        <thead>
          <tr className="result row">
            <td colSpan={4}>
              {total}
              {operation}
              {next}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <Button computeFunction={computeFunction} name="AC" />
            <Button computeFunction={computeFunction} name="+/-" />
            <Button computeFunction={computeFunction} name="&#37;" />
            <Button computeFunction={computeFunction} name="&#247;" className={className} />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="9" />
            <Button computeFunction={computeFunction} name="8" />
            <Button computeFunction={computeFunction} name="7" />
            <Button computeFunction={computeFunction} name="x" className={className} />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="6" />
            <Button computeFunction={computeFunction} name="5" />
            <Button computeFunction={computeFunction} name="4" />
            <Button computeFunction={computeFunction} name="-" className={className} />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="3" />
            <Button computeFunction={computeFunction} name="2" />
            <Button computeFunction={computeFunction} name="1" />
            <Button computeFunction={computeFunction} name="+" className={className} />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="0" colSpan={colSpan} />
            <Button computeFunction={computeFunction} name="." />
            <Button computeFunction={computeFunction} name="&#61;" className={className} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
