import { Component } from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Header from "./Header";
import SearchForm from "./Search";
import CardContainer from "./CardContainer";
import Country from "./CountryInfo"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        error: null,
        allCountries: [],
        countries: [],
        currentCountry: {},
    };
    this.filters = {
        region: "", 
        perpage: 8, 
        search: "",
    }
    this.setFilters = this.setFilters.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
    this.findName = this.findName.bind(this)
  }

  componentDidMount() {
    // return 0 ///////////////////////////////////////////////////
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            allCountries: result,
            currentCountry: result[54],
          });
          this.applyFilters(true)
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
    // console.log("Filters: ", this.filters);
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
        searchFiltered = searchFiltered.filter(country => new RegExp(this.filters.search.toLowerCase()).test(country.name.common.toLowerCase()))
      }
      this.setState({countries: searchFiltered.slice(0,this.filters.perpage)})
      // console.log(this.state.countries);
    }
  }

  findName(cca3) {
    return this.state.allCountries.find(con => con.cca3 === cca3)
  }





  // // for country info
  render() {
    if (this.state.isLoaded) {
      return (
        <Router>
          <div className="text-lightText dark:text-darkText">
            <Header />
            <Country country={this.state.currentCountry} find={this.findName}/>
          </div>
        </Router>
      );
    } else {
      return(
        <p className="flex items-center justify-center h-screen">Loading...</p>
        );
    } 
  }
  /*render() {
    // console.log("Render", this.state);
    let main;
    if (this.state.isLoaded) {
      main = (<CardContainer countries={this.state.countries}/>)
    } else {
      main = (<div>loading</div>);
    }
    return (
      <div className="text-lightText dark:text-darkText">
        <Header />
        <main className="py-14>
          <SearchForm handler={this.setFilters} filters={this.filters}/>
          {main}
        </main>
      </div>
    );
  }*/
}

export default App;