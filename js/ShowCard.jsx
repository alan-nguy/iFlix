const React = require("react");
const { Link } = require("react-router");

const ShowCard = React.createClass({
  render() {
    return(
      <Link to={`/details/${this.props.imdbID}`}>
        <div className="show-card">
          <img src={`public/img/posters/${this.props.poster}`} className="show-card-img" />
          <div className="show-card-text">
            <h3 className="show-card-title">{this.props.title}</h3>
            <h4 className="show-card-year">{this.props.year}</h4>
            <p className="show-card-description">{this.props.description}</p>
          </div>
        </div>
      </Link>
    )
  }
});

module.exports = ShowCard;