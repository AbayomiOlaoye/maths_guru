import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="panel">
        <table>
          <thead>
            <tr className="result row">
              <td colSpan={4}>0</td>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>AC</td>
              <td>+/-</td>
              <td>%</td>
              <td className="orange">
                <span className="semiC">:</span>
                <span className="divide">-</span>
              </td>
            </tr>
            <tr className="row">
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td className="orange">x</td>
            </tr>
            <tr className="row">
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td className="orange">-</td>
            </tr>
            <tr className="row">
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td className="orange">+</td>
            </tr>
            <tr className="row">
              <td colSpan={2}>0</td>
              <td>.</td>
              <td className="orange">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
