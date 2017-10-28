import React from 'react';
import styles from './app.css';
import {SONGS} from './constant.js';
import SongCard from './SongCard';
import {getSongs} from './actionCreators';
import {client_id} from './constant';
const suffix='?client_id='+client_id;

class Player extends React.Component
 {


 	componentDidMount(){

 		this.player=this.refs.audioPlayer;
 	}

componentDidUpdate(prevProps){
	const isActive =this.props.song;
	if(isActive &&prevProps.song!== this.props.song){
		this.player.load();
	}

	
	if(this.props.song)
	{
		if(this.player.paused)
		{
			this.player.play();
		}
	}

}
 	


render()
{
	const isActive =this.props.song !=null ;
		
	return (
			<div className={styles.player}>
		<audio ref='audioPlayer' controls>
                 {isActive && <source src={this.props.song.stream_url + suffix} />}   
               </audio>
			</div>
		);
	}
}


export default Player;