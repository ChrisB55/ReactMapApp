var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var BjjExplainer = require('BjjExplainer');
var GoogleMap = require('GoogleMap');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
      <Route path="bjjExplainer" component={BjjExplainer}/>
      <IndexRoute component={GoogleMap}/>
    </Route>
  </Router>,
  document.getElementById('app')
);