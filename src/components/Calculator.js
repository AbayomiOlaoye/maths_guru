import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      className: 'orange',
      colSpan: 2,
    };
    this.computeFunction = this.computeFunction.bind(this);
  }

  computeFunction = (e) => {
    this.setState((now) => calculate(now, e.target.name));
  }

  render() {
    // Destructuring this.state
    const {
      total, next, operation, className, colSpan,
    } = this.state;
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
              <Button computeFunction={this.computeFunction} name="AC" />
              <Button computeFunction={this.computeFunction} name="+/-" />
              <Button computeFunction={this.computeFunction} name="&#37;" />
              <Button computeFunction={this.computeFunction} name="&#247;" className={className} />
            </tr>
            <tr className="row">
              <Button computeFunction={this.computeFunction} name="9" />
              <Button computeFunction={this.computeFunction} name="8" />
              <Button computeFunction={this.computeFunction} name="7;" />
              <Button computeFunction={this.computeFunction} name="x" className={className} />
            </tr>
            <tr className="row">
              <Button computeFunction={this.computeFunction} name="6" />
              <Button computeFunction={this.computeFunction} name="5" />
              <Button computeFunction={this.computeFunction} name="4" />
              <Button computeFunction={this.computeFunction} name="-" className={className} />
            </tr>
            <tr className="row">
              <Button computeFunction={this.computeFunction} name="3" />
              <Button computeFunction={this.computeFunction} name="2" />
              <Button computeFunction={this.computeFunction} name="1" />
              <Button computeFunction={this.computeFunction} name="+" className={className} />
            </tr>
            <tr className="row">
              <Button computeFunction={this.computeFunction} name="0" colSpan={colSpan} />
              <Button computeFunction={this.computeFunction} name="." />
              <Button computeFunction={this.computeFunction} name="&#61;" className={className} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
