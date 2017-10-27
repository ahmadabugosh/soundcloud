import React from 'react';
import ReactDom from 'react-dom';
import SongList from './SongList';
import Header from './Header';
import styles from './app.css';

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
<App/>,
document.getElementById('root')
);


