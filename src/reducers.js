const initialState = {
	data: [],
	accountNo: 0,
};

function reducers(state = { ...initialState }, action) {
	switch (action.type) {
		case "GET_DATA":
			return { ...state, data: action.payload };
		case "GET_NO":
			return { ...state, accountNo: action.payload };
		default:
			return state;
	}
}

export default reducers;
