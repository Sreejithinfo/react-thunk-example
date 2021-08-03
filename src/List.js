import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function List() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);

	useEffect(() => {
		dispatch({ type: "LOAD_DATA" });
	}, [dispatch]);

	return data?.length ? data.map((d, i) => <p key={i}>{d.title}</p>) : "Loading...";
}

export default List;
