// import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../js/main.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../node_modules/bootstrap/scss/bootstrap.scss';
import SearchComponent from './search';
import ShowResultComponent from './showResult';

class ParentsComponent extends Component {
    constructor() {
        super();
        this.state = {
            key: null
        };
        this.onSearch = this.onSearch.bind(this);
    }
    
    onSearch(key) {
        this.setState({key});
    }

    render () {
        const key = this.state.key;
        console.log('this state key', key);
        return (
             <div>
                <p>Search Github Users </p>
                <SearchComponent onSearch={this.onSearch} />
                <ShowResultComponent value={key} />
             </div>
         )
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<ParentsComponent />, app);