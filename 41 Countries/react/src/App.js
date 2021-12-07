import { Component } from "react";

import Header from "./Header";
import SearchForm from "./Search";
import CardContainer from "./CardContainer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // this is supposed to be all data from the api
        // data: fetch("./data.json"),
        // this is countries showing on the screen
        countries: [
            {
                name: "Italy",
                capital: "Rome",
                area: 301336.0,
                population: 60665551,
            },
        ],
        filters: {
            region: "", 
            perpage: 8, 
            search: "",
        },
    };
    this.filtersHandler = this.filtersHandler.bind(this)
  }
  filtersHandler(props) {
    let filters = Object.assign({}, this.state.filters, props);
    this.setState({filters})
  }

  render() {
    console.log("rerender", this.state);
    return (
      <div className="text-lightText dark:text-darkText">
        <Header />
        <main className="pt-14 pb-14">
          <SearchForm handler={this.filtersHandler} />
          <CardContainer />
        </main>
      </div>
    );
  }
}

export default App;