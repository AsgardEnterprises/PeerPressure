var React = require('react');

var LoginForm = React.createClass({
  render: function() {
    return (<form id="login-form" action="http://phpoll.com/login/process" method="post" role="form">
              <div className={'form-group'}>
                <input type="text" name="username" id="username" tabindex="1" className={'form-control'} placeholder="Full Name" value="" />
              </div>
              <div className={'form-group'}>
                <input type="password" name="password" id="password" tabindex="2" className={'form-control'} placeholder="Password" />
              </div>
              <div className={'form-group'}>
                <div className={'row'}>
                  <div className={'col-sm-6 col-sm-offset-3'}>
                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" className={'form-control btn btn-submit'} value="Log In" />
                  </div>
                </div>
              </div>
            </form>)
  }
})

var RegisterForm = React.createClass({
  render: function() {
    return (<form id="register-form" action="http://phpoll.com/register/process" method="post" role="form">
              <div className={'form-group'}>
                <input type="text" name="username" id="username" tabindex="1" className={'form-control'} placeholder="Full Name" value="" />
              </div>
              <div className={'form-group'}>
                <input type="email" name="email" id="email" tabindex="1" className={'form-control'} placeholder="Email Address" value="" />
              </div>
              <div className={'form-group'}>
                <input type="password" name="password" id="password" tabindex="2" className={'form-control'} placeholder="Password" />
              </div>
              <div className={'form-group'}>
                <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className={'form-control'} placeholder="Confirm Password" />
              </div>
              <div className={'form-group'}>
                <div className={'row'}>
                  <div className={'col-sm-6 col-sm-offset-3'}>
                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" className={'form-control btn btn-submit'} value="Register Now" />
                  </div>
                </div>
              </div>
            </form>)
  }
})

var Form = React.createClass({
  getInitialState: function() {
      return { showLogin: true };
  },

  showRegister: function() {
    this.setState({ showLogin: false });
  },

  showLogin: function() {
    this.setState({ showLogin: true });
  },

  render: function() {
    return (<div className={'container'}>
      <div className={'row'}>
        <div className={'col-md-6 col-md-offset-3'}>
          <div className={'panel panel-login'}>
            <div className={'panel-heading'}>
              <div className={'row'}>
                <div className={'col-xs-6'}>
                  <input type="submit" value="Login" onClick={this.showLogin} className={this.state.showLogin ? 'toggle-form-button active' : 'toggle-form-button' }/>
                </div>
                <div clasName={'col-xs-6'}>
                  <input type="submit" value="Register" onClick={this.showRegister} className={this.state.showLogin ? 'toggle-form-button' : 'toggle-form-button active' }/>
                </div>
              </div>
              <hr/>
            </div>
            <div className={'panel-body'}>
              <div className={'row'}>
                <div className={'col-lg-12'}>
                {this.state.showLogin ? <LoginForm/> : <RegisterForm/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
});

React.render(<div> <h1>Peer Pressure!</h1><Form /></div>, document.body);
