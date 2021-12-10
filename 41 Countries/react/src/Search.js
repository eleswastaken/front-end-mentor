
import {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.stateHandler = props.handler;
        this.shuffle = props.shuffle;
        this.filterHandler = this.filterHandler.bind(this);
    }

    filterHandler(filter) {
        // pass new filter to the App to change the state, thus rerender
        this.stateHandler(filter)
    }

    render() {
        return (
            <div className=" m-auto">
                <form 
                    className="flex items-center mb-14 max-w-[95rem] m-auto"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <SearchField handler={this.filterHandler}/>
                    <button onClick={this.shuffle} className="hover:bg-grey-300 flex items-center justify-center ml-auto bg-lightElements dark:bg-darkElements h-12 w-12 mr-4 text-lightText dark:text-darkText rounded-md shadow-lg">
                        <svg className="fill-[grey] dark:fill-[#fff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.533 489.533" width="20" height="20">
                            <g><path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9   l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6   c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6   C49.575,418.961,150.875,501.261,268.175,488.161z"/></g> 
                        </svg>
                    </button>
                    <FilterField handler={this.filterHandler}/>
                </form>
            </div>
        );
    }
}

function SearchField(props) {
    function handleChange(event) {
        let filter = event.target.value;
        if (event.key !== "/") {
            props.handler(
                {search: filter.trim()}
            )
        }
        /// fix bug: when pressed enter during typing the filter dropdown would showup, this fixes it
        if (event.key === "Enter") {
            event.preventDefault()
        }
    }
    return (
        <div className="bg-lightElements dark:bg-darkElements h-12 text-lightText dark:text-darkText rounded-md shadow-lg">
            <label className="w-[29rem] flex h-full ">
                <div className="h-full w-20 flex items-center justify-center" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="20" height="20">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M-1-1h16v16H-1z"/>
                        <g stroke="#ccc" stroke-linecap="round">
                          <path d="M13.5 13.5l-4-4M10.5 5.5A5 5 0 1 1 .499 5.499 5 5 0 0 1 10.5 5.5z"/>
                        </g>
                      </g>
                    </svg>
                </div>
                <input 
                    type="search" 
                    className="bg-lightElements dark:bg-darkElements h-full ml-auto w-96 rounded-md pl-2 dark:placeholder-gray-300 placeholder-gray-500"
                    placeholder="Search for a country..."
                    onChange={handleChange}
                    onKeyDown={handleChange}
                /> 
            </label>
        </div>
    );
}

class FilterField extends Component {
    constructor(props) {
        super(props)
        this.submitFilter = props.handler   // this is a function
        this.state = {
            isExpanded: false,
        }
        this.openDropdown = this.openDropdown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    openDropdown(event) {
        let button = event.currentTarget;
        // dropdown
        let ul = event.currentTarget.nextSibling;

        if (!this.state.isExpanded) {
            this.setState({isExpanded: true});
            button.setAttribute("aria-expanded", true);
            ul.classList.toggle("hidden", false)
        } else {
            this.setState({isExpanded: false});
            button.setAttribute("aria-expanded", false);
            ul.classList.toggle("hidden", true)
        }
    }

    // handle clicks outside of the dropdown
    handleOutsideClick(event) {
        let button = event.currentTarget.parentElement.previousSibling;
        let ul = event.currentTarget.parentElement;

        this.setState({isExpanded: false});
        button.setAttribute("aria-expanded", false);
        ul.classList.toggle("hidden", true)
    }

    handleFilter(event, filter) {
        // hide dropdown, like a normal dropdown would do after choice :P
        let button = event.currentTarget.parentElement.parentElement.previousSibling;
        let ul = event.currentTarget.parentElement.parentElement;
        this.setState({isExpanded: false});
        button.setAttribute("aria-expanded", false);
        ul.classList.toggle("hidden", true);
        if (filter) {
            button.firstChild.nodeValue = filter;
        } else {
            button.firstChild.nodeValue = "Filter by region";
        }

        // pass new filter-region to the SearchForm
        this.submitFilter(
            {region: filter.toLowerCase()}
        )
    }

    render() {
        return (
            <div className="bg-lightElements dark:bg-darkElements h-12 w-48 text-lightText dark:text-darkText rounded-md shadow-lg relative">

                <button className="bg-lightElements dark:bg-darkElements h-full ml-auto w-full rounded-md flex items-center justify-between px-6 relative z-20"
                    aria-expanded="false"
                    onClick={this.openDropdown}
                >
                    Filter by region
                    <svg aria-hidden="true" className="scale-75" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#ccc" stroke-width="2" d="M1 1l8 8 8-8"/></svg>
                </button>

                <ul className="absolute top-14 bg-lightElements dark:bg-darkElements w-full text-lightText dark:text-darkText rounded-md shadow-lg py-2 z-20 hidden">
                    <li className="fixed top-0 left-0 w-screen h-screen z-[-1]" onClick={this.handleOutsideClick}></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "")}>All</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "Africa")}>Africa</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "Americas")}>America</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "Asia")}>Asia</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "Europe")}>Europe</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "Oceania")}>Oceania</button></li>
                </ul>

            </div>
        );
    }
}
function PerPageField() {
    return (
        <div className="bg-white h-12 w-24 text-lightText dark:text-darkText">

        </div>
    );
}

export default SearchForm;