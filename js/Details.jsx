const React = require("react");
const {Component} = require("react");
const Header = require("./Header.jsx");

class Details extends Component {
  render() {
    const params = this.props.params || {};
    const { title, description, year, poster, trailer } = params;

    return(
      <div className="container">
        <Header />
        <div className="video-info">
          <h1 className="video-title">{title}</h1>
          <h2 className="video-year">{year}</h2>
          <img className="video-poster" src={`/img/posters/${poster}`} />
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
        </div>
      </div>
    )
  }
}

module.exports = Details;