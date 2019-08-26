import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <Button />
    </div>
  );
}

export default Calculator;
