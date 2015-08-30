var React = require('react');

var UserDetails = React.createClass({
	render: function(){
		return <div className={'test-div'}>User details go here</div>
	}
})

var FriendsDetails = React.createClass({
	render: function(){
		return <div className={'test-div'}>Friends details go here</div>
	}
})

var App = React.createClass({
  render: function(){
    return <div><UserDetails/> <FriendsDetails/></div>
  }
})

React.render(<App/>, document.body);
