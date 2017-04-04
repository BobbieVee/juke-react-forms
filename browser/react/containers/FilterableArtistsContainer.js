import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {filterValue: ''};
		this.changeFilterValue = this.changeFilterValue.bind(this);
	}

	changeFilterValue(event){
		this.setState({filterValue: event.target.value});
	}

	render () {
	  return (
	    <div>
	      <FilterInput updateValue ={this.changeFilterValue}/>
	      <Artists artists={this.props.artists.filter(artist => artist.name.toLowerCase().match(this.state.filterValue.toLowerCase()))} />
	    </div>
	  )
}

}

export default FilterableArtistsContainer;