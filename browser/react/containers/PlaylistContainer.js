import React from 'react';
import Playlist from '../components/Playlist';
import axios from 'axios';

class PlaylistContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			playlist: '',
			disabled: true
		};
		this.changePlaylist = this.changePlaylist.bind(this);
		this.onClick = this.onClick.bind(this)

	}

	changePlaylist(event){
		const playlist = event.target.value;
		const disabled = (playlist.length < 16 && playlist.length > 0) ? false : true;
		this.setState({disabled, playlist});
	}

	onClick(event){
		event.preventDefault();
		axios.post('/api/playlists', {name: this.state.playlist})
		.then(res => res.data)
		.then((playlist)=> {
		})
	}


	render(){
		return(
			<div>

				<Playlist disabled={this.state.disabled} onClick={this.onClick} onChange={this.changePlaylist} value={this.state.playlist}/>
			</div>

		)
	}


}

export default PlaylistContainer;