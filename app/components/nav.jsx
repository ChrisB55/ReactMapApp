var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
      <h2>NavigationBar</h2>
      <Link to="/">Look Up A Gym.</Link>
      <Link to="/about">About</Link>
      <Link to="/bjjExplainer">What's BJJ</Link>
      </div>
    );
  }
});

module.exports = Nav;
