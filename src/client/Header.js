import React from 'react';
import styles from './app.css';
import {connect} from 'react-redux';

const Header = (props) =>  {
	const {dispatch} =props;
	return (
			<div className={styles.header} onClick={()=>dispatch({type:'INCREMENT_COUNTER'})} >
				AstroLabs - Sound Cloud Client App {props.count}
			</div>

		);



}

const mapStateToProps =(state)=>{
	return {
		...state

	};

}


export default connect (mapStateToProps)(Header);