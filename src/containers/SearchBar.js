import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { fetchWeather } from '../actions/';

import SearchIcon from '../components/SearchIcon';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();

    // fetch weather forecast
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div className="col-md-12">
        <form 
          className="input-group" 
          onSubmit={this.onFormSubmit}>
          
          <input 
            onChange={this.onInputChange} 
            value={this.state.term}
            className="form-control" 
            placeholder="Get a five-day forecast in your favorite cities"
            required />
          
          <span className="input-group-btn">
            <button type="submit" className="btn btn-info btn-search">
              <SearchIcon />
            </button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);