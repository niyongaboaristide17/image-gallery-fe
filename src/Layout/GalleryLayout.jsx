import React from 'react'
import Navbar from './Navbar'

const GalleryLayout = (props) => {
	return (
		<div className='w-screen flex'>
			<div className='md:w-1/4 bg-cyan-700 min-h-screen'></div>
			<div className='grow flex flex-col'>
				<Navbar/>
				<div className='p-2 grow'>
					<div className='border h-full'>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default GalleryLayout