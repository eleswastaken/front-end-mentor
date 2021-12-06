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
    };
  }
  render() {
    console.log("rerender", this.state);
    return (
      <div className="text-lightText dark:text-darkText h-screen">
        <Header />
        <main className="px-20 pt-14 ">
          <SearchForm app={this} />
        </main>
      </div>
    );
  }
}

export default App;