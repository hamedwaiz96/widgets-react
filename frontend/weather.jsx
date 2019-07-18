import React from 'react';

class Weather extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(function(position){
			const xhr = new XMLHttpRequest();
			xhr.onload = function() {
				if (xhr.status >= 200 && xhr.status < 400) {
    				var data = JSON.parse(xhr.responseText);
    				let temp = data.main.temp;
    				let f_temp = Math.round(((temp - 273.15) * 1.8 + 32));
    				document.querySelector('.weather').innerHTML = `The Current Weather in ${data.name} is: ${f_temp}`;
  				} else {
  					alert("wrong request");
  				}
			}
			xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=25a02137091c733c296cb55b5448666b`, true);
			xhr.send();
		});

	}

	render(){
		return (	
			<h1 className="weather">{ this.componentDidMount.bind(this) }</h1>
		)
	}
}


export default Weather;