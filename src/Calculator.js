import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <div className='row' id='row1'>
        <Button label='0' />
        <Button label='0' />
        <Button label='.' />
        <Button label='=' />
      </div>
      <div className='row' id='row2'>
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
      </div>
      <div className='row' id='row3'>
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
      </div>
      <div className='row' id='row4'>
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='x' />
      </div>
    </div>
  );
}

export default Calculator;
