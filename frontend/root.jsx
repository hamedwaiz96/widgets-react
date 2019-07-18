import React from 'react';
import Clock from './clock.jsx'
import Tabs from './tabs.jsx';
import Weather from './weather.jsx';

const PROPS = [{ title: 'msn', content: 'hello my name is msn and i like msn!'}, { title: 'google', content: 'hello my name is google and i like google!'}, { title: 'yahoo', content: 'hello my name is yahoo and i like yahoo!'}];

const Root = (props) => {
		return (
			<div>
				<Clock />
				<Tabs group={ PROPS }/>
				<Weather />
			</div>
		)
}



export default Root;