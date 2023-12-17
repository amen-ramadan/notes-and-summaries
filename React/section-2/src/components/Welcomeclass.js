import React from 'react';

class Welcomeclass extends React.Component {
  render() {
    return (
      <div> hello class component, {this.props.name}</div>
    )
  }
}

export default Welcomeclass;