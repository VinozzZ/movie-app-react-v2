import React, { Component } from 'react';

class Poster extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		// console.log(this.props);
		var imagePath ='http://image.tmdb.org/t/p/w300' + this.props.poster.poster_path;
		var imageAlt = this.props.title;
		return (
			<div className="col-sm-3">
				<img src={imagePath} alt={imageAlt}/>
			</div>
		)
	}
}
export default Poster;