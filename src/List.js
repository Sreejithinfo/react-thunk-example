import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./actions";

function List() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);

	useEffect(() => {
		getData(dispatch);
	}, [dispatch]);

	return data?.length ? data.map((d, i) => <p key={i}>{d.title}</p>) : "Loading...";
}

export default List;
