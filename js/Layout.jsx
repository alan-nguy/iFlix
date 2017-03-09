const React = require("react");

const Layout = React.createClass({
  render() {
    return(
      <div className="app-container">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Layout;