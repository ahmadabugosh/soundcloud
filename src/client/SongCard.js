
import React from 'react';
import styles from './app.css';
import {connect} from 'react-redux';
import {SONGS} from './constant.js';
import {playSong} from './actionCreators';

const SongCard = (props) =>  {
	

	const {artwork_url, title, user,dispatch, index} = props;
	const {avatar_url} =user;
	return (
			<div className={styles.songcard} onClick={()=>dispatch(playSong(index))}>
			{title}
			<br/>
			<img src={artwork_url} className={styles.songImage} />
			&nbsp;
			<img src={avatar_url} className={styles.songImage} />
			</div>
		);
}


export default SongCard;