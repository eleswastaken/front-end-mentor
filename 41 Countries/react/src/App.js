import { Component } from "react";

import Header from "./Header";
import SearchForm from "./Search";
import CardContainer from "./CardContainer"

class App extends Component {
  constructor(props) {
    super(props);
    // https://restcountries.com/v3.1/all
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
    };
    this.filters = {
        region: "", 
        perpage: 8, 
        search: "",
    }
    this.setFilters = this.setFilters.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
  }

  setFilters(props) {
    let filters = Object.assign({}, this.filters, props);
    this.filters = filters;
    // this.applyFilters()
  }

  applyFilters(isRandom) {
    let countries = [];

    this.setState(countries)
  }

  render() {
    console.log("rerender", this.state);
    return (
      <div className="text-lightText dark:text-darkText">
        <Header />
        <main className="pt-14 pb-14">
          <SearchForm handler={this.setFilters} />
          <CardContainer countries={this.state.countries}/>
        </main>
      </div>
    );
  }
}

export default App;