import React from "react";
import Cart from "./components/UI/Cart";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
import Error from "./components/UI/Error";

function App() {
	const [enteredData, setEnteredData] = useState([]);
	const [validData, isValidData] = useState(true);
	const [validAge, isValidAge] = useState(true);
	const userData = (user) => {
		setEnteredData([...enteredData, user]);
	};

	const emptyInput = (validation) => {
		isValidData(validation);
	};

	const isValidBtn = (validation) => {
		isValidData(validation);
	};

	const invalidAge = (validation) => {
		isValidAge(validation);
	};

	return (
		<div>
			{!validData && <Error text={"Okay"} isValidBtn={isValidBtn}></Error>}
			<Cart>
				<AddUser
					text={"Add User"}
					userData={userData}
					emptyInput={emptyInput}
					invalidAge={invalidAge}
				></AddUser>
			</Cart>
			<Cart>
				<UsersList user={enteredData}></UsersList>
			</Cart>
		</div>
	);
}

export default App;
