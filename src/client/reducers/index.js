import {mockSongs} from '../constant';

import {SONGS_RECEIEVED_ACTION_TYPE,PLAY_SONG_ACTION_TYPE} from '../actionCreators';

const defaultState ={
count:0,
songs:[],
activeIndex:0

};

const rootReducer  = (state=defaultState,action)=>{

	if(action.type==='INCREMENT_COUNTER')
	{
return {
	...state,
	count:state.count+1
};

	}


	if(action.type===SONGS_RECEIEVED_ACTION_TYPE)
	{
return {
	...state,
	songs:state.songs.concat(action.payload.collection)
};
}

	if(action.type===PLAY_SONG_ACTION_TYPE)
	{
return {
	...state,
	activeIndex:action.payload
};

	}
	return state;
}

export default rootReducer;