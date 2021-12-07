
import {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.someAppHandler = props.handler;

        this.filterFieldHandler = this.filterFieldHandler.bind(this);
    }

    filterFieldHandler(filter) {
        console.log(filter)
        // pass new region filter to the App to change the state, thus rerender
        // this.someAppHandler({region: filter})
    }

    render() {
        return (
            <form 
                className="flex items-center justify-between mb-14 max-w-7xl m-auto"
                onSubmit={(event) => event.preventDefault()}
            >
                <SearchField />
                <FilterField handler={this.filterFieldHandler}/>
            </form>
        );
    }
}

function SearchField() {
    return (
        <div className="bg-lightElements dark:bg-darkElements h-12 text-lightText dark:text-darkText rounded-md shadow-lg">
            <label className="w-[29rem] flex h-full ">
                <div className="h-full w-20 flex items-center justify-center" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="20" height="20">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M-1-1h16v16H-1z"/>
                        <g stroke="#BAB4CC" stroke-linecap="round">
                          <path d="M13.5 13.5l-4-4M10.5 5.5A5 5 0 1 1 .499 5.499 5 5 0 0 1 10.5 5.5z"/>
                        </g>
                      </g>
                    </svg>
                </div>
                <input 
                    type="search" 
                    className="bg-lightElements dark:bg-darkElements h-full ml-auto w-96 rounded-md pl-2"
                    placeholder="Search for a country..."
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

        // pass new filter-region to the SearchForm
        this.submitFilter(filter)
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
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "asia")}>Asia</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "africa")}>Africa</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "america")}>America</button></li>
                    <li className="filter-button"><button onClick={(e) => this.handleFilter(e, "europe")}>Europe</button></li>
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