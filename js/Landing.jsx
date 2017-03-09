const React = require('react');
const { hashHistory } = require("react-router");
const { Link } = require("react-router");
const { connector } = require("./Store");

const Landing = React.createClass({
  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value);
  },
  goToSearch(event) {
    hashHistory.push("search");
    event.preventDefault();
  },
  render() {
    return (
      <div className="home-interface">
        <h1 className="home-title">hi</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className="search" type="text" placeholder="Search" />
        </form>
        <Link to="/search" className="browse-all">Browse all</Link>
      </div>
    )
  }
});

module.exports = connector(Landing);