import logo from './logo.svg';
// import './App.css';

import Header from './Header';
import SearchForm from './Search'

function App() {
  return (
    <div className="text-lightText dark:text-darkText h-screen">
      <Header/>
      <main className="px-20 pt-14 ">
        <SearchForm/>
      </main>
    </div>
  );
}

export default App;
