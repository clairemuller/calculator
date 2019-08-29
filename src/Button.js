import React from 'react';
import './App.css';

class Button extends React.Component {

  render() {
    const { type, label } = this.props;

    return (
      <div className="button" id={type} onClick={() => this.props.onClick(type, label)}>
        <p>{label}</p>
      </div>
    );
  }
}

export default Button;
