import React from 'react';
import styles from './app.css';
import {connect} from 'react-redux';

const Header = (props) =>  {

	const {dispatch} =props;
	
	return (
			<div className={styles.header} onClick={()=>props.dispatch({type:'INCREMENT_COUNTER'})} >
				AstroLabs - Sound Cloud Client App {props.count}
			</div>

		);

}



export default Header;