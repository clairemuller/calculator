import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default Button;
