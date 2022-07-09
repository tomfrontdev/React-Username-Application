import styles from "./UsersList.module.css";

const UsersList = (props) => {
	return (
		<div className={styles.users}>
			{props.user.name} {props.user.age}
		</div>
	);
};

export default UsersList;
