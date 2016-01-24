require('../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"



var App  = React.createClass({

  render (){
    return (
    <div className="login">
      <div className="heading">
        <h2>Sign in</h2>
        <form action="#">

          <div className="input-group input-group-lg">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text" className="form-control" placeholder="Username or email"></input>
          </div>

            <div className="input-group input-group-lg">
              <span className="input-group-addon"><i className="fa fa-lock"></i></span>
              <input type="password" className="form-control" placeholder="Password"></input>
            </div>

            <button type="submit" className="float">Login</button>
           </form>
      </div>
    </div>
    )
  }
})

ReactDom.render((<App/>), document.getElementById('content'))

