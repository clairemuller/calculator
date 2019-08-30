import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      output: 0,
      input: 0,
      action: null
    }
  }

  handleClick = (type, label) => {
    // console.log(`type: ${type}, label: ${label}`);
    // type is either 'action' or 'input'
    if (type === 'action') {
      this.setAction(label)
    } else if (type === 'input') {
      this.doMath(label)
    }
  }

  setAction = (label)=> {
    if (label === 'AC') {
      // clears screen
      this.setState({ output: 0, input: 0, action: null })
    } else {
      this.setState({ action: label })
    }
  }

  doMath = (label) => {
    console.log(label);
    console.log(this.state);
  }

  add = () => {

  }

  subtract = () => {

  }

  multiply = () => {

  }

  divide = () => {

  }

  // this works
  percent = () => {
    let newOutput = this.state.output;
    newOutput /= Math.pow(10, 2);
    this.setState({ output: newOutput })
  }

  // this works
  switchSign = () => {
    let newOutput;
    if (this.state.output > 0) {
      newOutput = -this.state.output;
    } else if (this.state.output < 0) {
      newOutput = Math.abs(this.state.output);
    } else {
      newOutput = 0;
    }
    this.setState({ output: newOutput })
  }

  render() {
    return (
      <div className="calculator">
        <Screen output={this.state.output} />
        <div className='row' id='row1'>
          <Button label='AC' type='action' onClick={this.handleClick} />
          <Button label='+/-' type='action' onClick={this.handleClick} />
          <Button label='%' type='action' onClick={this.handleClick} />
          <Button label='÷' type='action' onClick={this.handleClick} />
        </div>
        <div className='row' id='row2'>
          <Button label='7' type='input' onClick={this.handleClick} />
          <Button label='8' type='input' onClick={this.handleClick} />
          <Button label='9' type='input' onClick={this.handleClick} />
          <Button label='x' type='action' onClick={this.handleClick} />
        </div>
        <div className='row' id='row3'>
          <Button label='4' type='input' onClick={this.handleClick} />
          <Button label='5' type='input' onClick={this.handleClick} />
          <Button label='6' type='input' onClick={this.handleClick} />
          <Button label='-' type='action' onClick={this.handleClick} />
        </div>
        <div className='row' id='row4'>
          <Button label='1' type='input' onClick={this.handleClick} />
          <Button label='2' type='input' onClick={this.handleClick} />
          <Button label='3' type='input' onClick={this.handleClick} />
          <Button label='+' type='action' onClick={this.handleClick} />
        </div>
        <div className='row' id='row5'>
          <Button label='0' type='input' onClick={this.handleClick} />
          <Button label='0' type='input' onClick={this.handleClick} />
          <Button label='.' type='input' onClick={this.handleClick} />
          <Button label='=' type='action' onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Calculator;
