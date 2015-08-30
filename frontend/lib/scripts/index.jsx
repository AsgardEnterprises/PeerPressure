var React = require('react');

var UserDetails = React.createClass({
	getInitialState: function(){
		return {
			name: 'Kate',
			task: {
				name: 'do 50 pushups ',
				done: true
			}
		}
	},

	render: function(){
		return <div className={'panel panel-default'}>Hello {this.state.name}. Your task is to {this.state.task.name}
		today and you have {this.state.task.done ? '' : 'not'} completed it!</div>
	}
})

var FriendsDetails = React.createClass({
	getInitialState: function(){
		return {
			friends: [
				{
					name: 'Kadi',
					doneTask: false
				},
				{
					name: 'Marcel',
					doneTask: true
				}
			]
		}
	},

	render: function(){
		return (<div className={'panel panel-default'}>
			{this.state.friends.forEach(function(friend){
				console.log(friend)
			})}
			Hello
		</div>)
	}
})

var App = React.createClass({
  render: function(){
    return <div><UserDetails/> <FriendsDetails/></div>
  }
})

React.render(<App/>, document.body);
