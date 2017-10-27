import React from 'react';
import ReactDom from 'react-dom';
import SongList from './SongList';
import Header from './Header';
import styles from './app.css';
import reset from './reset.css';
import {Provider} from 'react-redux';
import store from './redux/createStore';


const songs=[
{name:"Wish you were here"},
{name:"Beat It"},
{name:"Shadows of the day"} ];

const App = (props) => {
return(
<div className={styles.app}>
<Header/>
<SongList songs={songs} />

</div>

	);

}



ReactDom.render(
	<Provider store ={store}>
<App/>
</Provider>,
document.getElementById('root')
);


