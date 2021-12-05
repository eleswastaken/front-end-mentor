
import {Input} from "react-dom";
import {Component} from "react";

function SearchContainer() {
    return (
        <form className="mx-20 my-14 flex items-center justify-between">
            <div className="max-w-md w-full">
                <input type="text" className=" w-full"/>
            </div>
            <div>
                <input type="text" className=""/>
            </div>
        </form>
    );
}

class SearchForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="flex items-center justify-between mb-14">
                <SearchField />
                <FilterField />
            </form>
        );
    }
}

function SearchField() {
    return (
        <div className="bg-white h-12 w-24 text-lightText dark:text-darkText">
            {/* <input type="search" class="bg-lightElements dark:darkElements"/> */}
        </div>
    );
}
function FilterField() {
    return (
        <div className="bg-white h-12 w-24 text-lightText dark:text-darkText">

        </div>
    );
}
function PerPageField() {
    return (
        <div className="bg-white h-12 w-24 text-lightText dark:text-darkText">

        </div>
    );
}

// export default SearchContainer;
export default SearchForm;