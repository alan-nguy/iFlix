const React = require("react");
const ShowCard = require("./ShowCard");
const { arrayOf, object} = React.PropTypes;

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: ""
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent(event) {
    this.setState({ searchTerm: event.target.value });
  },
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">hi</h1>
          <input value={this.state.searchTerm} className="search-input" type="text" placeholder="Search" onChange={this.handleSearchTermEvent} />
        </header>
        <div className="shows">
          {console.log(this.props)}
          {this.props.route.shows
            .filter((show) => {
              return (
                `${show.title} ${show.description} ${show.year}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            })
            .map((show) => {
              return (
                {/* show attribute is this.props.show in ShowCard.jsx */},
                <ShowCard show={show} key={show.imdbID} />)
            })
          }
        </div>
      </div>
    )
  }
});



module.exports = Search;