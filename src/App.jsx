import './App.scss'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import { getCourse } from './api/course'
import CourseInfo from './components/CourseInfo'
import Form from './components/Form'
import Background from './components/Background'

const App = () => {
	const [courseData, setCourseData] = useState(null)

	useEffect(() => {
		const fetchCourseData = async () => {
			try {
				const data = await getCourse()
				setCourseData(data)
			} catch (err) {
				console.log('Error fetching data: ', err)
			}
		}

		fetchCourseData()
	}, [])

	return (
		<div className="App">
			{courseData && <Header date={courseData.date} duration={courseData.duration} />}
			<main className="container">
				{courseData && <CourseInfo {...courseData} />}
				<Form />
				<Background />
			</main>
		</div>
	)
}

export default App
