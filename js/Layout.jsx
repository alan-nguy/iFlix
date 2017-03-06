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

// const {element} = React.PropTypes;

// Layout.propTypes = {
//   children: element
// }

module.exports = Layout;