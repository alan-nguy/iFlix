const React = require("react");
const ShowCard = require("./ShowCard");
const Header = require("./Header");
const { string, object } = React.PropTypes;
const { connector } = require("./Store");

const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render() {
    return (
      <div className="container">
        <Header showSearch />
        <div className="shows">
          {this.props.route.shows
            .filter((show) => {
              return (
                `${show.title} ${show.description} ${show.year}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            })
            .map((show) => {
              return (
                {/* show attribute is this.props.show in ShowCard.jsx */},
                <ShowCard {...show} key={show.imdbID} />)
            })
          }
        </div>
      </div>
    )
  }
});

module.exports = connector(Search);