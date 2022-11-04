// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { render } from '@testing-library/react';
// import Calculator from './components/Calculator';

// // ReactDOM.render(<Calculator />, document.getElementById('root'));
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MathGician</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
