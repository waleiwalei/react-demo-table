var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      React.createElement(
        "strong",
        null,
        this.props.name
      )
    );
  }
});

ReactDOM.render(
  React.createElement(HelloMessage, { name: "Newcomers" }), 
  document.getElementById('root')
);
