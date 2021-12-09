
import {Link} from "react-router-dom";

import Paragraph from "./Paragraph";

function Country(props) {
	return (
		<main className="px-20 py-14">
			<div className="info-links mb-14 flex items-center justify-between">
				<Link to={" "} className="shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg">
						<svg className="mr-2 dark:fill-[#fff]" mlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="30" height="20" viewBox="0 0 486.975 486.975">
							<g>
								<path d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z"/>
							</g>
						</svg>
						Back
				</Link>
				<Link to={" "} className="shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg">
					Forward
					<svg className="ml-2 rotate-180 dark:fill-[#fff]" mlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="30" height="20" viewBox="0 0 486.975 486.975">
						<g>
							<path d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z"/>
						</g>
					</svg>
				</Link>
			</div>

			<div className="info-content flex items-center">
				<div className="flex-1 pr-16">
					<img className="w-full" src={"https://flagcdn.com/w320/yt.png"}/>
				</div>
				<div className="flex-1 pl-16">
					<h1 className="text-2xl font-bold mb-7">YT something</h1>
					<ul className="flex flex-wrap mb-10">
						<li className="info-p"><Paragraph text={"Native Name"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Population"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Region"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Sub Region"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Top Level Domain"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Currencies"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Languages"} value={"Value"} classN={"text-base"}/></li>
						<li className="info-p"><Paragraph text={"Capital"} value={"Value"} classN={"text-base"}/></li>
					</ul>
					<Paragraph text="Border countries" classN="text-base flex" value={
						<ul className="flex flex-wrap max-w-[350px] gap-3 ml-3">
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
							<BorderCountry to={" "} name={"Country"}/>
						</ul>
					}/>
				</div>
			</div>
		</main>
	);
}

function BorderCountry(props) {
	return (
		<Link to={props.to} className="inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-0.5">
			{props.name}
		</Link>
		);
}

export default Country;