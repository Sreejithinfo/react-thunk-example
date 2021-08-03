export const getData = (dispatch) => {
	return fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((d) => dispatch({ type: "GET_DATA", payload: d }));
};
