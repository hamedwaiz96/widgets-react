import React from 'react';

class Autocomplete extends React.Component {
	constructor(props){
		super(props);
		this.names = this.props.names;
		this.state = { search: "" }
	}

	inputChange(e){
		let new_val = e.target.value;
		this.setState({ search: new_val });
	}

	complete(name){
		this.setState({ search: `${name}` })
	}

	render(){
		const self = this;
		return (
			<div className="autocomplete">
			<div className="input">
			<label>Enter Name Here:</label><input onChange={ this.inputChange.bind(this) } value={ self.state.search } />
			</div>
			<ul>
				{ this.names.map(function(value, index){
					let low_val = value.toLowerCase();
					let low_search = self.state.search.toLowerCase();
					return ( low_val.includes(low_search) ? <li key={index} onClick={ self.complete.bind(self, value) }>{value}</li> : "")
				}) }
			</ul>
			</div>
		)
	}
}

export default Autocomplete;