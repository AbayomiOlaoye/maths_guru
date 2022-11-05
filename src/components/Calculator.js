import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

  const [now, toggle] = useState(state);

  const computeFunction = (e) => {
    toggle((now) => calculate({
      total: now.total,
      next: now.next,
      operation: now.operation,
    }, e.target.name));
  };

  // Destructuring state
  const { total, next, operation } = now;
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
            <td><button type="button" onClick={computeFunction} name="AC">AC</button></td>
            <td><button type="button" onClick={computeFunction} name="+/-">+/-</button></td>
            <td><button type="button" onClick={computeFunction} name="&#37;">%</button></td>
            <td className="orange">
              <button type="button" onClick={computeFunction} name="&#247;">&#247;</button>
            </td>
          </tr>
          <tr className="row">
            <td><button type="button" onClick={computeFunction} name="7">7</button></td>
            <td><button type="button" onClick={computeFunction} name="8">8</button></td>
            <td><button type="button" onClick={computeFunction} name="9">9</button></td>
            <td className="orange"><button type="button" onClick={computeFunction} name="x">x</button></td>
          </tr>
          <tr className="row">
            <td><button type="button" onClick={computeFunction} name="6">6</button></td>
            <td><button type="button" onClick={computeFunction} name="5">5</button></td>
            <td><button type="button" onClick={computeFunction} name="4">4</button></td>
            <td className="orange"><button type="button" onClick={computeFunction} name="-">-</button></td>
          </tr>
          <tr className="row">
            <td><button type="button" onClick={computeFunction} name="3">3</button></td>
            <td><button type="button" onClick={computeFunction} name="2">2</button></td>
            <td><button type="button" onClick={computeFunction} name="1">1</button></td>
            <td className="orange"><button type="button" onClick={computeFunction} name="+">+</button></td>
          </tr>
          <tr className="row">
            <td colSpan={2}><button type="button" onClick={computeFunction} name="0">0</button></td>
            <td><button type="button" onClick={computeFunction} name=".">.</button></td>
            <td className="orange"><button type="button" onClick={computeFunction} name="&#61;">=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
