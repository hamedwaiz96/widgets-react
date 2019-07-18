import React from 'react';

class Clock extends React.Component {
	constructor(props){
		super(props);
		let date = new Date();
		this.state = { hours: (date.getHours() / 10 >= 1) ? date.getHours() : `0${date.getHours()}`, seconds: (date.getSeconds() / 10 >= 1) ? date.getSeconds() : `0${date.getSeconds()}`, minutes: (date.getMinutes() / 10 >= 1) ? date.getMinutes() : `0${date.getMinutes()}` }
	}

	tick() {
		let date = new Date();
		this.setState({ hours: (date.getHours() / 10 >= 1) ? date.getHours() : `0${date.getHours()}`, seconds: (date.getSeconds() / 10 >= 1) ? date.getSeconds() : `0${date.getSeconds()}`, minutes: (date.getMinutes() / 10 >= 1) ? date.getMinutes() : `0${date.getMinutes()}` })
	}

	componentDidMount() {
		this.interval = window.setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount(e) {
		e.preventDefault();
		window.clearInterval(this.interval);
	}

	render() {
		return (
		<div>
			<h1>
			{ this.state.hours }:{this.state.minutes}:{this.state.seconds}
			</h1>
			<input onClick={ this.componentWillUnmount.bind(this) } type='submit' value='Stop' />
			<input onClick={ this.componentDidMount.bind(this) } type='submit' value='Start Again' />
		</div>
			
		)
	}
}

export default Clock;