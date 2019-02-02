import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBountry from '../components/ErrorBoundry';
import './MainPage.css';

import Header from '../components/Header'


class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }
    render() {
        const { onSearchChange, isPending } = this.props;
        return isPending?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBountry>
                            <CardList robots={this.filterRobots} />
                        </ErrorBountry>
                    </Scroll>

                </div>
            )
    }


}
export default MainPage;