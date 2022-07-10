import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			value={props.children}
			className={styles.button}
		>
			{props.children}
		</button>
	);
};

export default Button;
