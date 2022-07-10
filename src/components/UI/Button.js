import styles from "./Button.module.css";

const Button = (props) => {
	const showText = (event) => {
		props.validText(event.target.value);
	};
	return (
		<button
			onClick={showText}
			value={props.children}
			className={styles.button}
		>
			{props.children}
		</button>
	);
};

export default Button;
