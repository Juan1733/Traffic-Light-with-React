import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const [color, setcolor] = useState("red")

	const changeRed = () => {
		const light = document.querySelector("." + color);
		light.classList.remove("selected")
		document.querySelector("." + "red").classList.add("selected")
		
		setcolor((prev) => {		
			return "red"
		})
	}

	const changeYellow = () => {
		const light = document.querySelector("." + color);
		light.classList.remove("selected")
		document.querySelector("." + "yellow").classList.add("selected")
		
		setcolor((prev) => {		
			return "yellow"
		})
	}

	const changeGreen = () => {
		const light = document.querySelector("." + color);
		light.classList.remove("selected")
		document.querySelector("." + "green").classList.add("selected")
		
		setcolor((prev) => {		
			return "green"
		})
	}

	return (
		<div className="container">
			<div id="top-stick"></div>
			<div id="container" className="py-3">
				<div className="red light selected" onClick={changeRed}></div>
				<div className="yellow light my-2" onClick={changeYellow}></div>
				<div className="green light" onClick={changeGreen}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
