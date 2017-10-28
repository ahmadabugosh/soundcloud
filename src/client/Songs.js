import React from 'react';
import styles from './app.css';
import {SONGS} from './constant.js';
import SongCard from './SongCard';
import {getSongs} from './actionCreators';

class Songs extends React.Component
 {

 	componentDidMount(){
console.log('Fetching data');
this.props.dispatch(getSongs());



 	}


render()
{
		const {songs, dispatch} =this.props;
	const songCards=songs.map((song,idx) => <SongCard key={idx} index={idx} dispatch={dispatch} {...song} />);

	return (
			<div className={styles.songs}>
	{songCards }
			</div>
		);
	}
}


export default Songs;