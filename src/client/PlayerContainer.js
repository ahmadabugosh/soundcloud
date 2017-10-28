import React from 'react';
import styles from './app.css';
import {SONGS} from './constant.js';
import SongCard from './SongCard';
import {getSongs} from './actionCreators';
import Player from './Player.js';

class PlayerContainer extends React.Component
 {

 	


render()
{
		
	return (
			<div className={styles.playercontainer}>
	<Player song={this.props.song} />

			</div>
		);
	}
}


export default PlayerContainer;