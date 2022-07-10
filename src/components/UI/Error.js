import styles from "./Error.module.css";
import Button from "../UI/Button";

const Error = (props) => {
	return (
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<h2>Invalid Input</h2>
				</div>
				<div className={styles.content}>
					Please enter a valid name and age
					<div className={styles.actions}>
						<Button>{props.text}</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
