import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import styles from './style.module.scss'
import PropTypes from 'prop-types'
import { countries } from '../../utils/countries'
import { sendForm } from '../../api/chat'
import { useState } from 'react'
import Loader from '../Loader'

const dropdownStyles = {
	control: provided => ({
		...provided,
		position: 'absolute',
		top: '50%',
		left: '1.5rem',
		transform: 'translateY(50%)',
		background: 'transparent',
		border: 'none',
		boxShadow: 'none',
		width: '65px',
		minHeight: 'none',
		cursor: 'pointer'
	}),
	valueContainer: provided => ({
		...provided,
		padding: '0'
	}),
	input: provided => ({
		...provided,
		margin: '0',
		padding: '0',
		position: 'absolute',
		inset: 0
	}),
	option: provided => ({
		...provided,
		cursor: 'pointer',
		color: '#FFF',
		background: '#303A53',
		padding: '10px',
		'&:hover': { background: '#232B3D' }
	}),
	menu: provided => ({
		...provided,
		top: '60px',
		background: '#303A53'
	}),
	indicatorSeparator: () => ({
		display: 'none'
	}),
	dropdownIndicator: provided => ({
		...provided,
		marginLeft: '-40px',
		color: '#D7D7D7',
		'&:hover': { color: '#FF3459' }
	})
}

const DropdownInputValue = ({ data }) => <div>{data.value}</div>

const Form = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: { countryCode: countries[0] }
	})
	const [loading, setLoading] = useState(false)

	const onSubmit = async data => {
		setLoading(true)
		const message = `
			Name: ${data.name}
			Phone: (${data.countryCode.value}) ${data.phoneNumber}
			Email: ${data.email}
		`
		await sendForm(message)
		setLoading(false)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h3 className={styles.title}>
				Запишитесь <span>бесплатно</span> и получите подарок
			</h3>
			<input type="text" placeholder="Ваше имя и фамилия" {...register('name', { required: 'Имя обязательно' })} />
			{errors.name && <span className={styles.error}>{errors.name.message}</span>}

			<div className={styles.phone}>
				<Controller
					name="countryCode"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={countries}
							styles={dropdownStyles}
							components={{ SingleValue: DropdownInputValue }}
							value={countries.find(option => option.value === field.value.value)}
						/>
					)}
				/>
				<input
					type="number"
					placeholder="Ваш номер телефона"
					{...register('phoneNumber', {
						required: 'Номер телефона обязателен',
						minLength: {
							value: 9,
							message: 'Номер телефона должен состоять как минимум из 9 цифр'
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Неверный номер телефона'
						}
					})}
				/>
				{errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber.message}</span>}
			</div>
			<input
				type="text"
				placeholder="Ваш email"
				{...register('email', {
					required: 'Электронная почта обязательна',
					pattern: {
						value: /^\S+@\S+$/i,
						message: 'Неверный адрес электронной почты'
					}
				})}
			/>
			{errors.email && <span className={styles.error}>{errors.email.message}</span>}
			<button
				disabled={loading || Object.keys(errors).length > 0}
				{...((loading || Object.keys(errors).length > 0) && { className: styles.disabled })}
				type="submit"
			>
				Записаться бесплатно
			</button>
			<div className={styles.policy}>
				<span>Нажимая на кнопку я соглашаюсь</span>
				<a href="#">с политикой конфиденциальности</a>
			</div>
			{loading && <Loader />}
		</form>
	)
}

DropdownInputValue.propTypes = {
	data: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
}

export default Form
