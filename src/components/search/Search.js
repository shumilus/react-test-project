import React from 'react';
import "./Search.css";

class Search extends React.Component {
    render() {
        return <div>
            <p>React.Component</p>

            <div className="search">
                <input type="text" className="search-input" placeholder="What do you want to watch?"/>
                <button className="search-button">Search</button>
            </div>
        </div>
    }
}

export default Search
