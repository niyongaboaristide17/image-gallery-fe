import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

	const navigate = useNavigate()
	return (
		<div className='py-2 bg-slate-600 px-4 flex justify-between'>
			<div></div>
			<button onClick={
				() => {
					localStorage.clear()
					navigate('/login', {replace: true})
				}
			} className='px-2 py-1 rounded-full text-sm hover:bg-slate-900 text-white border'>Logout</button>
		</div>
	)
}

export default Navbar