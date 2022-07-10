import styles from "./Error.module.css";
import Button from "../UI/Button";

const Error = (props) => {
	const btnText = (content) => {
		console.log(content);
	};
	return (
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<h2>Invalid Input</h2>
				</div>
				<div className={styles.content}>
					Please enter a valid name and age (non-empty values).
					<div className={styles.actions}>
						<Button validText={btnText}>{props.text}</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
