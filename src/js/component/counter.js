import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component
const Counter = props => {
	return (
		<div className="py-5">
			<div className="row">
				<div className="col-lg-8 mx-auto">
					{/* <!-- Countdown 1--> */}
					<div className="rounded bg-gradient-1 text-white shadow p-4 text-center mb-5">
						<p className="mb-4 font-weight-bold text-uppercase" />
						<div
							id="clock-b"
							className="countdown-circles d-flex flex-wrap justify-content-center">
							<span className="h1 font-weight-bold far fa-clock" />
							<span className="h1 font-weight-bold">
								{props.digitSix}
							</span>
							<span className="h1 font-weight-bold">
								{props.digitFive}
							</span>
							<span className="h1 font-weight-bold">
								{props.digitFour}
							</span>
							<span className="h1 font-weight-bold">
								{props.digitThree}
							</span>
							<span className="h1 font-weight-bold">
								{props.digitTwo}
							</span>
							<span className="h1 font-weight-bold">
								{props.digitOne}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

export default Counter;
