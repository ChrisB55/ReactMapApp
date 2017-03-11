var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var GoogleMap = require('GoogleMap');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GoogleMap}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
