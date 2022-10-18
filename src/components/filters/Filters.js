import "./Filters.css";

const filters = [ 'All', 'Documentary', 'Comedy', 'Horror', 'Crime' ]

function Filters() {
    const filtersItems = filters.map((filter, index) => {
        const classes = `filter-elem-line ${index === 0 ? 'selected' : ''}`
            return <li className="filter-elem"
                       key={ filter }>
                <p>{ filter }</p>
                <p className={ classes }></p>
            </li>
        }
    );

    return <div>
        <p>Functional component</p>

        <div className="filters-container">
            <ul className="filters">{ filtersItems }</ul>
            <p className="light-line"></p>
            <p className="dark-line"></p>
        </div>
    </div>
}

export default Filters
