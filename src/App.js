import React, { Component } from 'react';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar from './SearchBar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      moviePosters: [],
      userInput: 'star war',
    };
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(userInput) {
    this.setState({
      userInput: userInput
    })
    var url = encodeURI(`http://api.themoviedb.org/3/search/movie?query=${this.state.userInput}&api_key=fec8b5ab27b292a68294261bb21b04a5`);
    $.getJSON(url, (movieData)=>{
      this.setState({
        moviePosters: movieData.results
      });
    });

  }
  render() {
    var postersArray = [];
    this.state.moviePosters.map((poster, index)=>{
      postersArray.push(<Poster poster={poster} key={index}/>);
      // console.log(poster);
    });
    return (
      <div className="App">
        <h1>This is the movie app again</h1>
        <SearchBar searchFunction={this.handleInput}/>
        {postersArray}
      </div>
    );
  }
}

export default App;
