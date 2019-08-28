import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <div className='row' id='row1'>
        <Button label='AC' type='action' />
        <Button label='+/-' type='action' />
        <Button label='%' type='action' />
        <Button label='÷' type='action' />
      </div>
      <div className='row' id='row2'>
        <Button label='7' type='input' />
        <Button label='8' type='input' />
        <Button label='9' type='input' />
        <Button label='x' type='action' />
      </div>
      <div className='row' id='row3'>
        <Button label='4' type='input' />
        <Button label='5' type='input' />
        <Button label='6' type='input' />
        <Button label='-' type='action' />
      </div>
      <div className='row' id='row4'>
        <Button label='1' type='input' />
        <Button label='2' type='input' />
        <Button label='3' type='input' />
        <Button label='+' type='action' />
      </div>
      <div className='row' id='row5'>
        <Button label='0' type='input' />
        <Button label='0' type='input' />
        <Button label='.' type='input' />
        <Button label='=' type='action' />
      </div>
    </div>
  );
}

export default Calculator;
