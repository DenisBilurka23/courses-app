import axios from 'axios'

export const sendForm = async text => {
	try {
		const response = await axios.post(`https://${process.env.REACT_APP_CHAT_BASE_URL}/sendMessage`, {
			chat_id: process.env.REACT_APP_CHAT_ID,
			text
		})
		return response.data
	} catch (e) {
		throw new Error('Failed to send data')
	}
}
