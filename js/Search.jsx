const React = require("react");
const ShowCard = require("./ShowCard");
const { arrayOf, object} = React.PropTypes;
const Header = require("./Header");

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: ""
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange(searchTerm) {
    this.setState({ searchTerm });
  },
  render() {
    return (
      <div className="container">
        <Header handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} showSearch={true}/>
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