import styles from "./Button.module.css";

const Button = (props) => {
	console.log(props);
	return <button className={styles.button}>{props.children}</button>;
};

export default Button;
