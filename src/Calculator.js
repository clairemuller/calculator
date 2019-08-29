import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0
    }
  }

  handleClick = (type, label) => {
    if (type === 'action') {
      if (label === 'AC') {
        this.setState({ number: 0 })
      } else {
        this.doMath(label)
      }
    } else if (type === 'input') {
      this.sendToScreen(label)

    }
  }

  sendToScreen = (label) => {

  }

  doMath = (label) => {
    switch (label) {
      case '+':

        break;
      case '-':

        break;
      case 'x':

        break;
      case '':

        break;
      default:

    }
  }

  render() {
    return (
      <div className="calculator">
        <Screen />
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
