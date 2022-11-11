import '../index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Header from './Header';
import Home from './Home';
import Quote from './Quote';
import NotFound from './NotFound';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
