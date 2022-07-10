import styles from "./UsersList.module.css";

const UsersList = (props) => {
	if (props.user.length === 0) return;
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
