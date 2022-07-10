import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
	const [enteredName, setName] = useState("");
	const [enteredAge, setAge] = useState("");

	const submitHandler = (event) => {
		let validData;
		event.preventDefault();
		const userState = {
			name: enteredName.trim(),
			age: enteredAge.trim(),
		};
		if (userState.name != "" && userState.age != "") props.user(userState);
		if (userState.name == "" && userState.age == "") {
			validData = false;
			props.valid(validData);
		}
	};
	const getUsername = (event) => {
		setName(event.target.value);
	};

	const getUserage = (event) => {
		setAge(event.target.value);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className={styles.input}>
				<label>User</label>
				<input type="text" onChange={getUsername}></input>
				<label>Age (years)</label>
				<input type="text" onChange={getUserage}></input>
				<Button>{props.text}</Button>
			</div>
		</form>
	);
};

export default AddUser;
