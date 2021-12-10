
import {Component} from "react";


function LoadingSkeleton(props) {
	// console.log(window.location.pathname)
	if (/info/.test(window.location.pathname)) {
		return (
			<div aria-hidden="true" className="max-w-[95rem] m-auto">
				<div className="info-links mb-14 flex items-center justify-between">
					<div className="skeleton h-7 w-24 bg-lightElements dark:bg-darkElements px-4 py-1 rounded-md">

					</div>
				</div>

				<div className="info-content flex items-center flex-col lx:flex-row">
					<div className="skeleton flex-1 lx:pr-16 mb-10 lx:mb-0 min-h-full bg-lightElements dark:bg-darkElements rounded-md ">
						<img src="../images/aut.svg" className="w-[full] h-full opacity-0" width="500" height="400"/>
					</div>
					<div className="w-full lx:w-[auto] lx:flex-1 lx:pl-14">
						<h1 className="skeleton text-2xl font-bold lx:ml-[10px] mb-10 w-2/3 h-8 bg-lightElements dark:bg-darkElements rounded-md "></h1>
						<ul className="flex flex-wrap mb-10">
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
							<li className="skeleton lx:ml-[10px] skeleton-p h-8 bg-lightElements dark:bg-darkElements rounded-md "></li>
						</ul>
						<div className="flex flex-col lx:flex-row">
							<div className="skeleton mb-3 lx:mb-0 lx:ml-[10px] w-1/3 h-8 bg-lightElements dark:bg-darkElements rounded-md"></div>
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
		// console.log("homepage")
		return (
			<div className="">
	            <div className=" m-auto">
	                <div className="flex flex-wrap items-center justify-between mb-5 sm:mb-9 md:mb-10 lg:mb-12 xl:mb-14 max-w-[95rem] m-auto">
	     			    <div className="skeleton w-full md:w-[29rem] mb-3 lg:mb-0  bg-lightElements dark:bg-darkElements h-12 rounded-md "></div>
	                    <div className="skeleton hover:bg-grey-300 mb-3 lg:mb-0  h-12 w-12 md:ml-auto mr-4 bg-lightElements dark:bg-darkElements rounded-md"></div>
	       			    <div className="skeleton bg-lightElements mb-3 lg:mb-0  dark:bg-darkElements h-12 w-48 rounded-md "></div>
	                </div>
	            </div>
				<ul className="max-w-[95rem] m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center">
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
					<div className="skeleton min-w-[250px] h-[320px] w-full overflow-hidden rounded-md bg-lightElements dark:bg-darkElements"></div>
				</ul>
			</div>
			);
	}

}

export default LoadingSkeleton;