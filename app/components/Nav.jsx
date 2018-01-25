var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return  (
			<div>
				<IndexLink to="/">Get weather</IndexLink>
				<Link to="/about">About</Link>
				<Link to="/examples">Examples</Link>
			</div>
		);
	}
});

module.exports = Nav;