
import {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
    }

    handleClick(event) {
        /// it is a form rememeber
        event.preventDefault()

        /// this is the way to change, thus rerender, parent component state
        this.props.app.setState({countries: [1,2,3,4]})
    }

    render() {
        return (
            <form 
                className="flex items-center justify-between mb-14 max-w-7xl m-auto"
                onSubmit={this.handleSubmit}
            >
                <SearchField />
                <FilterField />
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
function FilterField() {
    return (
        <div className="bg-lightElements dark:bg-darkElements h-12 w-48 text-lightText dark:text-darkText rounded-md shadow-lg">
            <button className="bg-lightElements dark:bg-darkElements h-full ml-auto w-full rounded-md flex items-center justify-center">
                Filter by region
                <svg aria-hidden="true" className="ml-4 scale-75" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#ccc" stroke-width="2" d="M1 1l8 8 8-8"/></svg>
            </button>
        </div>
    );
}
function PerPageField() {
    return (
        <div className="bg-white h-12 w-24 text-lightText dark:text-darkText">

        </div>
    );
}

export default SearchForm;