import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Globe from '../../assets/images/glob.svg'

const CourseInfo = ({ title, subtitle, level, author, bonus, type }) => (
	<>
		<div className={styles.content}>
			<div className={styles.type}>
				<img src={Globe} alt="globe" />
				<span>{type}</span>
			</div>
			<h1>{title}</h1>
			<div className={styles.subtitle}>
				<span>{level}</span>
				<h3>{subtitle}</h3>
			</div>
			<p className={styles.description}>
				Узнайте какими <span>навыками должен обладать фронтенд разработчик в 2022 году</span> и как начать карьеру в
				востребованной профессии
			</p>
		</div>
		<div className={styles.details}>
			<div className={styles.author}>
				<div className={styles['details__img']}>
					{/* eslint-disable-next-line no-undef */}
					<img src={require(`../../assets/images/${author.img}`)} alt="author" />
				</div>
				<div>
					<div className={styles.name}>
						<span>{author.name.split(' ')[0] + ' '}</span>
						<span>{author.name.split(' ')[1]}</span>
					</div>
					<span>{author.description}</span>
				</div>
			</div>
			<div className={styles.bonus}>
				<div className={styles['details__img']}>
					{/* eslint-disable-next-line no-undef */}
					<img src={require(`../../assets/images/${bonus.img}`)} alt="bonus" />
				</div>
				<div>
					<span>{bonus.name}</span>
					<span>{bonus.description}</span>
				</div>
			</div>
		</div>
	</>
)

const extendedShape = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

CourseInfo.propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
	author: PropTypes.shape(extendedShape).isRequired,
	bonus: PropTypes.shape(extendedShape).isRequired
}

export default CourseInfo
