import React from 'react';
import Playlist from '../components/Playlist';
import axios from 'axios';

class PlaylistContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={playlist: ''};
		this.changePlaylist = this.changePlaylist.bind(this);
		this.onClick = this.onClick.bind(this)

	}

	changePlaylist(event){
		this.setState({playlist: event.target.value});
		console.log('playlist change = ', this.state.playlist)
	}

	onClick(){
		axios.post('/api/playlists', {name: this.state.playlist})
		.then(res => res.data)
		.then((playlist)=> {
			console.log('playlist = ', playlist)
		})
	}


	render(){
		return(
			<div>

				<Playlist onClick={this.onClick} onChange={this.changePlaylist} value={this.state.playlist}/>
			</div>

		)
	}


}

export default PlaylistContainer;