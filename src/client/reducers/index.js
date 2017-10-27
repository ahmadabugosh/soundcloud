const defaultState ={
count:0

};

const rootReducer  = (state=defaultState,action)=>{

	if(action.type==='INCREMENT_COUNTER')
	{
return {
	...state,
	count:state.count+1
};

	}
	return state;
}

export default rootReducer;