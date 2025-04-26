import * as React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

const App = (): React.ReactElement => {
  return React.createElement('div', { className: 'App' }, 
    React.createElement(Dashboard)
  );
};

export default App;