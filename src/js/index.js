//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";
import Counter from "./component/counter.js";

let count = 0;

//render your react application
let six = 0,
	five = 0,
	four = 0,
	three = 0,
	two = 0,
	one = 0;

setInterval(() => {
	six = Math.floor(count / 1000000) % 10;
	five = Math.floor(count / 100000) % 10;
	four = Math.floor(count / 10000) % 10;
	three = Math.floor(count / 100) % 10;
	two = Math.floor(count / 10) % 10;
	one = Math.floor(count / 1) % 10;

	count++;
	ReactDOM.render(
		<Counter
			digitSix={six}
			digitFive={five}
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
