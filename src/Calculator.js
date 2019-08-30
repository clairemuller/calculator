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
      this.setState({ action: label })
      this.handleAction(label);
    } else if (type === 'input') {
      this.handleInput(label);
    }
  }

  handleAction = (label) => {
    let newOutput = this.state.output;
    switch (label) {
      case 'AC':
        this.clearScreen();
        break;
      case '+':
        this.add(newOutput);
        break;
      case '-':
        this.subtract(newOutput);
        break;
      case 'x':
        this.multiply(newOutput)
        break;
      case '÷':
        this.divide(newOutput)
        break;
      case '%':
        this.percent(newOutput)
        break;
      case '+/-':
        this.switchSign(newOutput)
        break;
      default:
        return newOutput;
    }
  }

  handleInput = (label) => {
    // if there's math to be done
    if (this.state.action != null) {
      this.doMath(label);
    } else {
      let newOutput;

      if (this.state.output !== 0) {
        newOutput = this.state.output;
        newOutput = newOutput.toString()
        newOutput += label.toString();
      } else {
        newOutput = label;
      }
      this.setState({ output: newOutput })
    }
  }

  doMath = (label) => {
    // let newOutput = this.state.output;
  }

  clearScreen = () => {
    this.setState({ output: 0, input: 0, action: null })
  }

  add = (newOutput) => {
    this.setState({ output: newOutput });
  }

  subtract = (newOutput) => {
    this.setState({ output: newOutput });
  }

  multiply = (newOutput) => {
    this.setState({ output: newOutput });
  }

  divide = (newOutput) => {
    this.setState({ output: newOutput });
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
