const React = require('react');
const {Link} = require("react-router");

const Landing = React.createClass({
  render() {
    return (
      <div className="home-interface">
        <h1 className="home-title">hi</h1>
        <input className="search" type="text" placeholder="Search" />
        <Link to="/search" className="browse-all">Browse all</Link>
      </div>
    )
  }
});

module.exports = Landing;