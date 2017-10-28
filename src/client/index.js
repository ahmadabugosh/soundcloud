import React from 'react';
import ReactDom from 'react-dom';
import SongList from './SongList';
import Header from './Header';
import Genres from './Genres';
import Songs from './Songs';
import PlayerContainer from './PlayerContainer';
import styles from './app.css';
import reset from './reset.css';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store from './redux/createStore';



const App = (props) => {
	const {dispatch,count,songs,activeIndex} =props;
	let activeSong=null;
	if(activeIndex>=0)
	{
		activeSong=songs[activeIndex];

	}
	console.log("App Song: ",activeSong);
return(
<div className={styles.app}>
<Header count={count} dispatch={dispatch} />
<Genres/>
<Songs songs={songs} dispatch={dispatch}/>
<PlayerContainer song={activeSong} />

</div>

	);

}

const mapStateToProps =(state)=>{
	return {
		...state

	};

}

const AppWithState= connect (mapStateToProps)(App);



ReactDom.render(
	<Provider store ={store}>
<AppWithState/>
</Provider>,
document.getElementById('root')
);

