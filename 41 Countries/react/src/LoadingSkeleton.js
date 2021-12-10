
import {Component} from "react";


function LoadingSkeleton(props) {
	console.log(window.location.pathname)
	if (/info/.test(window.location.pathname)) {
		return (
			<div aria-hidden="true">
				<div className="info-links mb-14 flex items-center justify-between">
					<div className="skeleton h-7 w-24 bg-lightElements dark:bg-darkElements px-4 py-1 rounded-md">

					</div>
				</div>

				<div className="info-content flex items-center">
					<div className="skeleton flex-1 pr-16 min-h-full bg-lightElements dark:bg-darkElements rounded-md ">
					<img src="../images/aut.svg" className="w-full h-[120%] opacity-0"/>
					</div>
					<div className="flex-1 pl-14">
						<h1 className="skeleton text-2xl font-bold ml-[10px] mb-10 w-2/3 h-8 bg-lightElements dark:bg-darkElements rounded-md "></h1>
						<ul className="flex flex-wrap mb-10">
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
						</ul>
						<div className="flex">
							<div className="skeleton ml-[10px] w-1/3 h-8 bg-lightElements dark:bg-darkElements rounded-md"></div>
							<ul className="flex flex-wrap max-w-[350px] gap-3 ml-3">
								<li className="skeleton inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-3 px-2"></li>
								<li className="skeleton inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-3 px-2"></li>
								<li className="skeleton inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-3 px-2"></li>
								<li className="skeleton inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-3 px-2"></li>
								<li className="skeleton inline-block min-w-[100px] rounded-sm bg-lightElements dark:bg-darkElements text-center text-sm py-3 px-2"></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			);
	} else {
		console.log("homepage")
	}
	return (
		<div>Laosdofj</div>
		);

}

export default LoadingSkeleton;