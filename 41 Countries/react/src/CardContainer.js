
import {Component} from "react";

import Paragraph from "./Paragraph";

function CardContainer(props) {
	// let countries = props.countries;
	return(
		<div className=" px-20">
			<ul className="max-w-7xl m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center">
				{ props.countries.map((country, index) => <li key={index}><Card country={country} /></li>) }
			</ul>
		</div>
	);
}

function Card(props) {
	let country = props.country
	return(
		<div className="max-w-sm w-full h-full bg-white overflow-hidden rounded-md relative shadow-lg
			min-w-[250px]
			bg-lightElements dark:bg-darkElements
			flex flex-col
		">
			<div className="overflow-hidden flex-1 relative">
				<img src={country.flags.svg} className="absolute object-cover h-full w-full blur"/>
				<a href="#" tabIndex="-1" className="w-full h-full inline-block flex items-center justify-center group relative z-10">
					<img src={country.flags.svg}
						className="transition-transform ease-in-out duration-300 group-hover:scale-110 object-contain max-h-full max-w-full"
						alt={"Flag of " + country.name.official}
						width="420" height="280"
					/>
				</a>
			</div>
			<div className="px-6 pt-6 flex-1">
				<h2 className="mb-4 font-bold text-base">
					<a href="#">
						{country.name.common}
					</a>
				</h2>
				<Paragraph text="Population" value={country.population} classN="card-p text-sm" isNum={true}/>
				<Paragraph text="Region" value={country.region} classN="card-p text-sm"/>
				<Paragraph text="Capital" value={country.capital} classN="card-p text-sm"/>
			</div>
		</div>
	);
}

export default CardContainer;