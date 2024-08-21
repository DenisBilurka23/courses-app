import styles from './style.module.scss'

const Form = () => {
	return (
		<form className={styles.form}>
			<h3 className={styles.title}>
				Запишитесь <span>бесплатно</span> и получите подарок
			</h3>
			<input type="text" placeholder="Ваше имя и фамилия" />
			<input type="text" placeholder="Ваш номер телефона" />
			<input type="text" placeholder="Ваш email" />
			<button type="submit">Записаться бесплатно</button>
			<div className={styles.policy}>
				<span>Нажимая на кнопку я согашаюсь</span>
				<a href="#">с политикой конфидециальности</a>
			</div>
		</form>
	)
}

export default Form
