import React from 'react';
import './App.css';

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <p>{this.props.output}</p>
      </div>
    )
  }
}

export default Screen;
