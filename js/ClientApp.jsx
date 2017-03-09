const React = require('react');
const ReactDOM = require("react-dom");
const {Router, Route, IndexRoute, hashHistory} = require("react-router");
const { store } = require("./Store.jsx");
const { Provider } = require("react-redux");
const { shows } = require("../public/data");
const Landing = require("./Landing.jsx");
const Search = require("./Search.jsx");
const Layout = require("./Layout.jsx");
const Details = require("./Details");

const App = React.createClass ({
  assignShow(nextState, replace) {
    const showArray = shows.filter((show) => {
      return (show.imdbID === nextState.params.id);
    });

    if (showArray.length < 1) {
      return replace("/");
    }

    Object.assign(nextState.params, showArray[0]);
    return nextState;
  },
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/search" component={Search} shows={shows} />
            <Route path="/details/:id" component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
