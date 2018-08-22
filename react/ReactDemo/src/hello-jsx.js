import React from 'react';
import ReactDOM from 'react-dom';

function toUpper(str) {
  return str ? str.toUpperCase(): str;
}

class HelloMessage extends React.Component {
  render() {
    return <div>Hello <strong>{toUpper(this.props.name)}</strong></div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Newcomers" />,
  document.getElementById('root')
);
