
import {Component} from "react";

import Paragraph from "./Paragraph";

function CardContainer(props) {
	// let countries = props.countries;
	return(
		<div className=" px-20">
			<ul className="max-w-7xl m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center">
				{ props.countries.map(country => <li><Card country={country} /></li>) }
			</ul>
		</div>
	);
}

function Card(props) {
	let country = props.country
	console.log("card", country)
	return(
		<div className="max-w-sm w-full bg-white overflow-hidden rounded-md relative shadow-lg
			bg-lightElements dark:bg-darkElements
		">
			<div className="w-full overflow-hidden">
				<a href="#" tabIndex="-1" className="w-full h-full">
					<img src="../images/aut.svg"
						className="transition-transform w-full h-full ease-in-out duration-300 hover:scale-110 object-cover"
						alt="Flag"
						width="420" height="280"
					/>
				</a>
			</div>
			<div className="px-6 pt-6">
				<h2 className="mb-4 font-bold text-base">
					<a href="#">
						Austria
					</a>
				</h2>
				<Paragraph text="Population" value={999888777666} classN="card-p text-sm" isNum={true}/>
				<Paragraph text="Region" value="Europe" classN="card-p text-sm"/>
				<Paragraph text="Capital" value="Vienna" classN="card-p text-sm"/>
			</div>
		</div>
	);
}

export default CardContainer;