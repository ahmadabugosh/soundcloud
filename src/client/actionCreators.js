import {url} from './constant';
export const SONGS_RECEIEVED_ACTION_TYPE='SONGS_RECEIEVED_ACTION_TYPE';
export const PLAY_SONG_ACTION_TYPE='PLAY_SONG_ACTION_TYPE';

const songsReceived = function(data){
		return {
			type: SONGS_RECEIEVED_ACTION_TYPE,
			payload:data
		}
	}

	const songFetchFailed = function(error){
		return {
			type:SONGS_RECEIEVED_ACTION_TYPE,
			payload:error
		}
	}

export const getSongs =() =>
{

	

return dispatch => {
	//network request
	fetch(url)
	.then(response => response.json())
	.then(data=> dispatch(songsReceived(data)))
	.catch(error=> dispatch(songFetchFailed(error)))

	};

}

export const playSong =(index) =>
{
	console.log('Success at', index);

	return {
			type: PLAY_SONG_ACTION_TYPE,
			payload:index
		}

}




