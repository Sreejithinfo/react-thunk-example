const initialState = {
	data: [],
	accountNo: 0,
	loader: false,
};

function reducers(state = { ...initialState }, action) {
	switch (action.type) {
		case "LOAD_DATA":
			return { ...state, loader: true };
		case "GET_DATA":
			return { ...state, data: action.payload, loader: false };
		case "GET_NO":
			return { ...state, accountNo: action.payload };
		default:
			return state;
	}
}

export default reducers;
