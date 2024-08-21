import styles from './style.module.scss'
import HTML from '../../assets/images/html.png'
import CSS from '../../assets/images/css.png'
import JS from '../../assets/images/js.png'
import Sublime from '../../assets/images/sublime.png'
import Vscode from '../../assets/images/vscode.png'

const Background = () => (
	<>
		<div className={`${styles.bg} ${styles['bg__left']}`} />
		<div className={`${styles.bg} ${styles['bg__right']}`} />
		<div className={`${styles.html} ${styles.bg}`}>
			<img src={HTML} alt="HTML" />
		</div>
		<div className={`${styles.css} ${styles.bg}`}>
			<img src={CSS} alt="CSS" />
		</div>
		<div className={`${styles.js} ${styles.bg}`}>
			<img src={JS} alt="JS" />
		</div>
		<div className={`${styles.sublime} ${styles.bg}`}>
			<img src={Sublime} alt="Sublime" />
		</div>
		<div className={`${styles.vscode} ${styles.bg}`}>
			<img src={Vscode} alt="vscode" />
		</div>
		<div className={styles['bg__mobile']} />
	</>
)

export default Background
