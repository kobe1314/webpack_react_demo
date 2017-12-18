import React, { Component } from 'react';
// import get from '../utils/request';
import get from '../utils/fetch';
import { error } from 'util';
import LoadingComponent from './loadingComponent';

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
        keyword && this.setState({isLoading: true});
        keyword && get(url).then(data => {
            this.setState({isLoading: false, list: data.items});
            console.log('api return value:', data)
        }).catch(error => {
            console.log('call api error info:', error);
        });

    }
    render() {
        const imgStyle = {
            width: '50px'
        };
        // const { key } = this.props;
        const { value } = this.props;
        console.log('showResult:' + value);
        const initComp = !value && (<p>please enter your search</p>);
        const loadingComp = this.state.isLoading && (<LoadingComponent />); 
        const searchComp = this.state.list.map((personInfo) => {
            return (
                <div className="card"> 
                    <img src={personInfo.avatar_url} style={imgStyle}/>
                    <p className="card-text">
                        {personInfo.login}
                    </p>
                </div>
            )
        })
        return (
            <div> 
                {initComp}
                {loadingComp}
                <div className="row">
                    {searchComp}
                </div>
            </div>

        )
    }
}

export default ShowResultComponent;