import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBountry from '../components/ErrorBoundry';
import './app.css';

import { setSearchField, requestRobots } from '../action';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // onRequestRobots: () => requestRobots(dispatch)
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(users => {
        //         this.setState({ robots: users });
        //     })
        this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    // }

    render() {
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // return !robots.length ?
        return isPending?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBountry>
                            <CardList robots={filterRobots} />
                        </ErrorBountry>
                    </Scroll>

                </div>
            )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(App);