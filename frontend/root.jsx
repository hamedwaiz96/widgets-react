import React from 'react';
import Clock from './clock.jsx'
import Tabs from './tabs.jsx';
import Weather from './weather.jsx';
import Autocomplete from './autocomplete.jsx';

const PROPS = [{ title: 'msn', content: 'hello my name is msn and i like msn!'}, { title: 'google', content: 'hello my name is google and i like google!'}, { title: 'yahoo', content: 'hello my name is yahoo and i like yahoo!'}];

const names = ['Gabriel', 'Charlie', 'Melissa', 'Chelsea', 'Max', 'William', 'Rodger', 'Crystal', 'Andre', 'Hildegard', 'Mercedes', 'Jamie', 'Eliseo'];

const Root = (props) => {
		return (
			<div>
				<Clock />
				<Tabs group={ PROPS }/>
				<Weather />
				<Autocomplete names={ names }/>
			</div>
		)
}



export default Root;