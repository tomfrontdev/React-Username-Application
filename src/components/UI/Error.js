import styles from "./Error.module.css";
import Button from "../UI/Button";

const Error = (props) => {
	const btnText = (event) => {
		props.closeModal(event.target.value);
	};
	return (
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<h2>Invalid Input</h2>
				</div>
				<div className={styles.content}>
					{props.text}
					<div className={styles.actions}>
						<Button onClick={btnText}>Okay</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
