
import {Component} from "react";
import {Link} from "react-router-dom";

import Paragraph from "./Paragraph";

function CardContainer(props) {
	// let countries = props.countries;
	// console.log(props.countries.length)
	return(
		<div className="">
			<ul className="max-w-7xl m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center">
				{ props.countries.slice(0,props.filters.perpage).map((country, index) => <li key={index}><Card country={country} createLink={props.createLink} /></li>) }
			</ul>
		</div>
	);
}

function Card(props) {
	let country = props.country;
	// console.log(country)
	return(
		<div className="max-w-sm w-full h-full bg-white overflow-hidden rounded-md relative shadow-lg
			min-w-[250px]
			bg-lightElements dark:bg-darkElements
			flex flex-col
		">
			<div className="overflow-hidden flex-1 relative">
				<img src={country.flags.svg} className="absolute object-cover h-full w-full blur-lg"/>
				<Link to={props.createLink(country)} tabIndex="-1" className="w-full h-full inline-block flex items-center justify-center group relative z-10">
					<img src={country.flags.svg}
						className="transition-transform ease-in-out duration-300 group-hover:scale-110 object-contain max-h-full max-w-full"
						alt={"Flag of " + country.name.official}
						width="420" height="280"
					/>
				</Link>
			</div>
			<div className="px-6 pt-6 flex-1">
				<h2 className="mb-4 font-bold text-base">
					<Link to={props.createLink(country)}>
						{country.name.common}
					</Link>
				</h2>
				<Paragraph text="Population" value={country.population} classN="card-p text-sm" isNum={true}/>
				<Paragraph text="Region" value={country.region} classN="card-p text-sm"/>
				<Paragraph text="Capital" value={country.capital} classN="card-p text-sm"/>
			</div>
		</div>
	);
}

export default CardContainer;