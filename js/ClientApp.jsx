const React = require('react');
const ReactDOM = require("react-dom");
const MyTitle = require("./MyTitle");

const MyFirstComponent = () => {
  return (
    <h1>hi</h1>
  )
};

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
