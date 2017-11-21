import React, { Component } from 'react';

class SearchComponents extends Component {
    constructor() {
        super();
        this.state = {
            key: null
        };
        this.onChange = this.onChange.bind(this);
    }
    
    onChange () {
        const { onSearch } = this.props;
        onSearch(this.inputRef.value);
        console.log('input value :', this.inputRef.value);
    }
    render() {
        return (
            <div>
                <label> Search: </label>
                <input ref= {(ref) => {this.inputRef = ref}} onChange={this.onChange} />
            </div>
        )
    }
};

SearchComponents.propTypes = {

}

export default SearchComponents;
