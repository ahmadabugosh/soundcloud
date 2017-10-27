import React from 'react';

class SongList extends React.Component{

	constructor (props){
super(props);
	}

	getFirstSong()
	{
		return this.props.songs[0];
	}

	render(){
		const firstSong=this.getFirstSong();
	return (
		<div>
		All the songs come here!!
		First song: {firstSong.name}

		</div>
	);

	}
}

export default SongList;