import styles from './style.module.scss'
import Logo from '../../assets/images/logo.svg'
import Calendar from '../../assets/images/calendar.svg'
import Clock from '../../assets/images/clock.svg'
import PropTypes from 'prop-types'

const Header = ({ date, duration }) => (
	<header className={`${styles.header} container`}>
		<div>
			<img src={Logo} alt="logo" />
		</div>
		<div className={styles.info}>
			<div>
				<img src={Calendar} alt="calendar" />
				<span>{date}</span>
			</div>
			<div>
				<img src={Clock} alt="clock" />
				<span>{duration}</span>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	date: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired
}

export default Header
