import axios from 'axios'

export const getCourse = async () => {
	try {
		const response = await axios.get('/course.json')
		return response.data
	} catch (error) {
		console.error('Error fetching course data:', error)
		throw error
	}
}
