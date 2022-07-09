import React from "react";
import Cart from "./components/UI/Cart";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
	const [enteredData, setEnteredData] = useState([
		{
			name: "Michał",
			age: 31,
		},
	]);
	console.log(enteredData);
	const userData = (user) => {
		setEnteredData([...enteredData, user]);
	};
	return (
		<div>
			<Cart>
				<AddUser user={userData}></AddUser>
			</Cart>
			<Cart>
				<UsersList user={enteredData}></UsersList>
			</Cart>
		</div>
	);
}

export default App;
