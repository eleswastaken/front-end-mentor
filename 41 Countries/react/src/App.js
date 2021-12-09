import { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
    this.createInfoLink = this.createInfoLink.bind(this)
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
            currentCountry: result[132],
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
  createInfoLink(country, back=0, forward=0) {
    return `/info/${country.cca3}/${back}/${forward}`;
  }
                  // <Country country={this.state.currentCountry} find={this.findName}/>
  render() {
    if (this.state.isLoaded) {
      return (
        <Router>
          <div className="text-lightText dark:text-darkText">
            <Header />
            <main className="py-14">
              <Switch>
                <Route exact path="/">
                  <SearchForm handler={this.setFilters} filters={this.filters}/>
                  <CardContainer countries={this.state.countries} createLink={this.createInfoLink}/>
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
        );
    } else if (!this.state.isLoaded) {
      return (
        <main className="text-lightText dark:text-darkText">
          <Header />
          <p className="flex items-center justify-center h-screen">Loading...</p>
        </main>
        );    
    }
  }

}

export default App;