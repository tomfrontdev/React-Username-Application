import styles from "./Error.module.css";
import React from "react";
import Button from "../UI/Button";
import Card from "./Cart";

const Error = (props) => {
	return (
		<React.Fragment>
			<div className={styles.backdrop} onClick={props.onConfirm}>
				<Card className={styles.modal}>
					<header className={styles.header}>
						<h2>Invalid Input</h2>
					</header>
					<div className={styles.content}>
						<p>{props.text}</p>
					</div>
					<div className={styles.actions}>
						<Button onClick={props.onConfirm}>Okay</Button>
					</div>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Error;
