import './App.css';

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import StickyHeader from '../components/StickyHeader';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
// import { setRobots } from '../actions/actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { searchField } = this.props;
    const { robots } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.props.onSearchChange}/>
            <StickyHeader>
              <CardList robots={filteredRobots} />
            </StickyHeader>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
    searchField: state.searchField
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);