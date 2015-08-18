var React = require('react')
var RouteHandler = require('react-router').RouteHandler

var Main = React.createClass({
  render: function() {
    return ( 
      <div className="main-content">
        <nav className="navbar navbar-default" role="navigation">
          <div className="row">
            <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
              MENU
            </div>
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
})

module.exports = Main;