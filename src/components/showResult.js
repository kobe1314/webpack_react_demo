import React, { Component } from 'react';
// import get from '../utils/request';
import get from '../utils/fetch';
import { error } from 'util';

class ShowResultComponent extends Component {
    constructor() {
        super();
        this.state = {
            isLoading : false,
            list:[]
        }
    };

    componentWillReceiveProps(nextProps) {
        const keyword = nextProps.value;
        const url =  `https://api.github.com/search/users?q=${keyword}`;
        keyword && get(url).then(data => {
            this.setState({isLoading: true, list: data.items});
            console.log('api return value:', data)
        }).catch(error => {
            console.log('call api error info:', error);
        });

    }
    render() {
        // const { key } = this.props;
        const { value } = this.props;
        console.log('showResult:' + value);
        const initComp = !value && (<p>please enter your search</p>)
        const loadingComp = !this.state.isLoading && <p>application is loading</p>
        const searchComp = this.state.list.map((personInfo) => {
            return (
                <div> 
                    <img src={personInfo.avatar_url} />
                    <p>{personInfo.login}</p>
                </div>
            )
        })
        return (
            <div> 
                {initComp}
                {loadingComp}
                {searchComp}
            </div>

        )
    }
}

export default ShowResultComponent;