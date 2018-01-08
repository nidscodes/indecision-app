// var template = <p>This is JSX</p>;
var template = React.createElement(
  "p",
  null,
  "Welcome"
);

var appRoute = document.getElementById("app");

ReactDOM.render( template, appRoute );
