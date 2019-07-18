import React from 'react';

class Tabs extends React.Component {
	constructor(props){
		super(props);
		this.groups = this.props.group;
		this.state = { clicked: [] }
	}

	clickedToggle(title){
		const self = this;
		let new_clicked = this.state.clicked.slice();
		if(new_clicked.includes(title)){
			new_clicked.splice(new_clicked.findIndex(function(el){
				el === title;
			}));
			
		} else {
			new_clicked.push(title);
		}
		self.setState({ clicked: new_clicked })
	}

	render() {
	const self = this;
		return (
			<ul>
				{this.groups.map(function(value, index) {
					return (
						<li key={ index } onClick={ self.clickedToggle.bind(self, value.title) }>
						<h1>{value.title}</h1>
						{ (self.state.clicked.includes(value.title)) ? <p>{value.content}</p> : "" }
						</li>
					)		
				})}
			</ul>
		)
	}
}


export default Tabs;