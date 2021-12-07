import { Component } from "react";

import Header from "./Header";
import SearchForm from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this is supposed to be all data from the api
      // data: fetch("./data.json"),
      // this is countries showing on the screen
      countries: [],
      region: "", 
      perpage: 8, 
      search: "",
    };
    // this.filters = {};
    //// the idea: create a method this.setFilters that works like setState(even calls render at the end),
    //// this would certainly make it easier to work with filters during conditional rendering
    this.filterHandler = this.filterHandler.bind(this)
  }

  filterHandler(props) {
    this.setState(props)
  }

  render() {
    console.log("rerender", this.state);
    return (
      <div className="text-lightText dark:text-darkText h-screen">
        <Header />
        <main className="px-20 pt-14 ">
          <SearchForm handler={this.filterHandler} />
        </main>
      </div>
    );
  }
}

export default App;