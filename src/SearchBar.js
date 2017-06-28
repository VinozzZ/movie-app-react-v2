import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props) {
		super(props);

		this.state={
			searchInput: ''
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleFormSubmit(e){
		e.preventDefault();
		this.props.searchFunction(this.state.searchInput)
	}
	handleTextChange(e){
		e.preventDefault();
		this.setState({
			searchInput: e.target.value
		})
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input placeholder="Search a movie..." value={this.state.searchInput} onChange={this.handleTextChange}/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default SearchBar;