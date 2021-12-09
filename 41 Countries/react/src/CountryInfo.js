
import {Link} from "react-router-dom";

function Country(props) {
	return (
		<main className="px-20">
			<div className="info-links my-14 flex items-center justify-between">
				<Link to={" "} className="shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg">
						<svg className="mr-2" mlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="30" height="20" viewBox="0 0 486.975 486.975">
							<g>
								<path d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z" fill="silver"/>
							</g>
						</svg>
						Back
				</Link>
				<Link to={" "} className="shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg">
					Forward
					<svg className="ml-2 rotate-180" mlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="30" height="20" viewBox="0 0 486.975 486.975">
						<g>
							<path d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z" fill="silver"/>
						</g>
					</svg>
				</Link>
			</div>
			<div className="info-content flex">
				
			</div>
		</main>
	);
}


export default Country;