const React = require("react");

const ShowCard = React.createClass({
  render() {
    return(
      <div className="show-card">
        <img src={`public/img/posters/${this.props.show.poster}`} className="show-card-img" />
        <div className="show-card-text">
          <h3 className="show-card-title">{this.props.show.title}</h3>
          <h4 className="show-card-year">{this.props.show.year}</h4>
          <p className="show-card-description">{this.props.show.description}</p>
        </div>
      </div>
    )
  }
});

// makes for easier debugging
ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}

module.exports = ShowCard;