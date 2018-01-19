var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Arlen'
var message = 'Message'

ReactDOM.render(
	<Greeter name={firstName} message={message}/>,
	document.getElementById('app')
);