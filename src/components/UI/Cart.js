import styles from "./Cart.module.css";

const Cart = (props) => {
	return (
		<div className={`${styles.card} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Cart;
