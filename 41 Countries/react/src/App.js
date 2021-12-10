import { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./Header";
import SearchForm from "./Search";
import CardContainer from "./CardContainer";
import Country from "./CountryInfo";
import LoadingSkeleton from "./LoadingSkeleton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        error: null,
        allCountries: [],
        countries: [],
        // currentCountry: {},
    };
    this.filters = {
        region: "", 
        perpage: 8, 
        search: "",
    }
    this.setFilters = this.setFilters.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.areSame = this.areSame.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
    this.findByCca3 = this.findByCca3.bind(this)
    this.createInfoLink = this.createInfoLink.bind(this)
  }

  componentDidMount() {
    return 0 ///////////////////////////////////////////////////
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            allCountries: result,
            // currentCountry: result[132],
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
  shuffle() {
    if (!this.filters.region && !this.filters.search) {
      this.applyFilters(true);
      return 0;
    }
    console.log("shuffle countries")
    console.log(this.state.countries.length)
    let countries = this.state.countries.slice();
    for(let i = 0; i < this.state.countries.length; i++) {
      let th = countries[i]
      countries.splice(i, 1)
      countries.splice(Math.floor(Math.random()*countries.length), 0, th)
    }
    this.setState({countries: countries})
  }
  setFilters(props) {
    let filters = Object.assign({}, this.filters, props);
    if (!this.areSame(this.filters, filters)) {
      this.filters = filters;
      console.log("Filters: ", this.filters);

      (!this.filters.region.trim() && !this.filters.search.trim()) ? this.applyFilters(true) : this.applyFilters();
    }
  }
  areSame(one, two) {
    if (Object.keys(one).every(key => one[key] === two[key])) {
      return true
    }
    return false
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
      this.setState({countries: searchFiltered})
      // console.log(this.state.countries);
    }
  }

  findByCca3(cca3) {
    return this.state.allCountries.find(con => con.cca3 === cca3)
  }
  createInfoLink(country, back=0, forward=0) {
    return `/info/${country.cca3}/${back}/${forward}`;
  }
                  // <Country country={this.state.currentCountry} find={this.findByCca3}/>
  render() {
    return (
      <Router>
        <div className="text-lightText dark:text-darkText">
          <Header />
          <Switch>
            <main className="py-14 px-20">
            {this.state.isLoaded &&
              <div>
                <Route exact path="/">
                  <SearchForm handler={this.setFilters} filters={this.filters} shuffle={this.shuffle}/>
                  <CardContainer countries={this.state.countries} filters={this.filters} createLink={this.createInfoLink}/>
                </Route>
                <Route exact path="/info/:cca3/:back/:forward">
                  <Country findByCca3={this.findByCca3}/>
                </Route>
                <Route exact path="/info/:cca3">
                  <Country findByCca3={this.findByCca3}/>
                </Route>
              </div>
            }
            {!this.state.isLoaded &&
              <div>
                <LoadingSkeleton />
              </div>
            }
          </main>
          </Switch>
        </div>
      </Router>
      );
  }
                // <p className="flex items-center justify-center h-full">Loading...</p>

}

export default App;