import { Component } from "react";

import Header from "./Header";
import SearchForm from "./Search";
import CardContainer from "./CardContainer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        error: null,
        allCountries: [],
        countries: [
/*            {
                name: {common: "Italy"},
                capital: "Rome",
                area: 301336.0,
                population: 60665551,
                region: "Europe",
                flags: {png: "../images/aut.svg", svg: ""}
            },*/
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

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            allCountries: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  setFilters(props) {
    let filters = Object.assign({}, this.filters, props);
    this.filters = filters;
    // this.applyFilters()
    (!this.filters.region.trim() && !this.filters.search.trim()) ? this.applyFilters(true) : this.applyFilters();
  }

  applyFilters(isRandom = false) {
    // let countries = [];
    if (isRandom) {
      // get random countries
      let arr = [];
      for (let i = 0; i < this.filters.perpage; i++) {
        let country = this.state.allCountries[Math.floor(Math.random()*this.state.allCountries.length)];
        if (!arr.includes(country)) arr.push(country);
      }
      this.setState({countries: arr})
    } else {
      // sort through region
      let regionFiltered = this.state.allCountries.slice();
      if (this.filters.region.trim()) {
        regionFiltered = regionFiltered.filter(country => country.region.toLowerCase() === this.filters.region.toLowerCase()) 
      }

      let searchFiltered = regionFiltered;
      if (this.filters.search.trim()) {
        searchFiltered = searchFiltered.filter(country => new RegExp(this.filters.search).test(country))
      }
      this.setState({countries: searchFiltered.slice(this.filters.perpage)})
    }
  }

  render() {
    console.log("rerender", this.state);
    // if (!this.state.countries.length) {
    //   this.applyFilters(true)
    //   console.log(this.state)
    //   return null
    // }
    let main;
    if (this.state.isLoaded) {
      main = (<CardContainer countries={this.state.countries}/>)
    } else {
      main = (<div>loading</div>);
    }
    return (
      <div className="text-lightText dark:text-darkText">
        <Header />
        <main className="pt-14 pb-14">
          <SearchForm handler={this.setFilters} />
          {main}
        </main>
      </div>
    );
  }
}

export default App;