import React from "react";
import Cart from "./components/UI/Cart";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
import Error from "./components/UI/Error";

function App() {
	const [enteredData, setEnteredData] = useState([]);
	const [validData, isValidData] = useState(true);
	const userData = (user) => {
		setEnteredData([...enteredData, user]);
	};

	const isValid = (validation) => {
		isValidData(validation);
	};

	return (
		<div>
			{!validData && <Error text={"Okay"}></Error>}
			<Cart>
				<AddUser
					text={"Add User"}
					user={userData}
					valid={isValid}
				></AddUser>
			</Cart>
			<Cart>
				<UsersList user={enteredData}></UsersList>
			</Cart>
		</div>
	);
}

export default App;
