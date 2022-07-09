import { useReducer } from "react";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
	return (
		<div className={styles.users}>
			<ul>
				{props.user.map((user) => (
					<li>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersList;
