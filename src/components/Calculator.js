import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.computeFunction = this.computeFunction.bind(this);
  }

  computeFunction = (e) => {
    this.setState((now) => calculate({
      total: now.total,
      next: now.next,
      operation: now.operation,
    }, e.target.name));
  }

  render() {
    // Destructuring this.state
    const { total, next, operation } = this.state;
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
              <td><button type="button" onClick={this.computeFunction} name="AC">AC</button></td>
              <td><button type="button" onClick={this.computeFunction} name="+/-">+/-</button></td>
              <td><button type="button" onClick={this.computeFunction} name="&#37;">%</button></td>
              <td className="orange">
                <button type="button" onClick={this.computeFunction} name="&#247;">&#247;</button>
              </td>
            </tr>
            <tr className="row">
              <td><button type="button" onClick={this.computeFunction} name="7">7</button></td>
              <td><button type="button" onClick={this.computeFunction} name="8">8</button></td>
              <td><button type="button" onClick={this.computeFunction} name="9">9</button></td>
              <td className="orange"><button type="button" onClick={this.computeFunction} name="x">x</button></td>
            </tr>
            <tr className="row">
              <td><button type="button" onClick={this.computeFunction} name="6">6</button></td>
              <td><button type="button" onClick={this.computeFunction} name="5">5</button></td>
              <td><button type="button" onClick={this.computeFunction} name="4">4</button></td>
              <td className="orange"><button type="button" onClick={this.computeFunction} name="-">-</button></td>
            </tr>
            <tr className="row">
              <td><button type="button" onClick={this.computeFunction} name="3">3</button></td>
              <td><button type="button" onClick={this.computeFunction} name="2">2</button></td>
              <td><button type="button" onClick={this.computeFunction} name="1">1</button></td>
              <td className="orange"><button type="button" onClick={this.computeFunction} name="+">+</button></td>
            </tr>
            <tr className="row">
              <td colSpan={2}><button type="button" onClick={this.computeFunction} name="0">0</button></td>
              <td><button type="button" onClick={this.computeFunction} name=".">.</button></td>
              <td className="orange"><button type="button" onClick={this.computeFunction} name="&#61;">=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
