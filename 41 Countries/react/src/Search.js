
import {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        /// it is a form rememeber
        event.preventDefault()

        /// this is the way to change, thus rerender, parent component state
        this.props.app.setState({countries: [1,2,3,4]})
    }

    render() {
        return (
            <form className="flex items-center justify-between mb-14">
                <SearchField />
                <FilterField />
                <button
                    onClick={this.handleClick}
                >Change state</button>
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

export default SearchForm;