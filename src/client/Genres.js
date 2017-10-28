import React from 'react';
import styles from './app.css';
import {connect} from 'react-redux';
import {GENRES} from './constant.js';

const Genres = (props) =>  {
const genres= GENRES.map(function(genre,idx){

	return (
		<div key={idx} className={styles.genre}>{genre}</div>
		);
		});
	return (
			<div className={styles.genres} >
			{genres}
			</div>

		);



}

const mapStateToProps =(state)=>{
	return {
		...state

	};

}


const mapDispatchToProps =(dispatch)=>{
	return {
		dispatchIncrement:()=> dispatch({type:'INCREMENT_COUNTER'})

	};

}


export default connect (mapStateToProps,mapDispatchToProps)(Genres);