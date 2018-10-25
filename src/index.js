import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

// For Youtube API
const API_KEY = "AIzaSyDyq2qQQbkZcIE48W4Ra5BF2trB5HOXxJU";

// Create a new component
// This component should product some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
