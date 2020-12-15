import React, { useEffect, useState } from "react";
import Counter from "./counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [count, setCount] = useState(0);

	setInterval(() => {
		setCount(count + 1);
	}, 1000);

	let six = Math.floor(count / 1000000) % 10;
	let five = Math.floor(count / 100000) % 10;
	let four = Math.floor(count / 10000) % 10;
	let three = Math.floor(count / 100) % 10;
	let two = Math.floor(count / 10) % 10;
	let one = Math.floor(count / 1) % 10;
	return (
		<div className="text-center mt-5">
			<Counter
				digitSix={six}
				digitFive={five}
				digitFour={four}
				digitThree={three}
				digitTwo={two}
				digitOne={one}
			/>
		</div>
	);
}
