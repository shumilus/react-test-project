import "./App.css";
import React from "react";
import Counter from "./components/counter/Counter";
import Search from "./components/search/Search";
import Filters from "./components/filters/Filters";
import { CreateComponentTest } from "./components/Create-component-test";

function App() {
    return (
        <div className="App">
            <CreateComponentTest/>
            <hr/>
            <Counter/>
            <hr/>
            <Search/>
            <hr/>
            <Filters/>
        </div>
    );
}

export default App;
