import React from "react";
import Cart from "./components/UI/Cart";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
import Error from "./components/UI/Error";
import styles from "./Section.module.css";

function App() {
	const [enteredData, setEnteredData] = useState([]);
	const [validData, isValidData] = useState(true);
	const [validAge, isValidAge] = useState(true);
	const userData = (user) => {
		setEnteredData([...enteredData, user]);
	};

	console.log(enteredData);

	const closeModal = () => {
		isValidData(true);
		isValidAge(true);
	};

	const validation = (content) => {
		if (content == "No input!") {
			isValidData(false);
		}
		if (content == "Number is below 0!") {
			isValidAge(false);
		}
	};

	return (
		<React.Fragment>
			{!validData && (
				<Error
					text={
						"Please enter a valid name and age (non-empty values)."
					}
					onConfirm={closeModal}
				></Error>
			)}
			{!validAge && (
				<Error
					text={"Please enter a valid age (> 0)."}
					onConfirm={closeModal}
				></Error>
			)}
			<Cart>
				<AddUser
					text={"Add User"}
					userData={userData}
					validation={validation}
				></AddUser>
			</Cart>
			<Cart>
				<UsersList user={enteredData}></UsersList>
			</Cart>
		</React.Fragment>
	);
}

export default App;
