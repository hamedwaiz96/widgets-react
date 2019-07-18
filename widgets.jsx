import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root.jsx'

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root />, root);
});