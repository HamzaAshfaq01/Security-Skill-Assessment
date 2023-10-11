import React, { useState, useEffect } from 'react'
import UserDataTable from './CollapseAbleTable'
import axios from 'axios'

function App() {
	const [record, setRecords] = useState([])

	const getData = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/records')
			setRecords(data)
		} catch (error: any) {
			console.log(error.message)
		}
	}
	useEffect(() => {
		getData()
	}, [])
	return (
		<div className='App'>
			<UserDataTable records={record} />
		</div>
	)
}

export default App
