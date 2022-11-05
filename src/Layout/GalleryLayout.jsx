import React from 'react'
import Navbar from './Navbar'

const GalleryLayout = (props) => {
	return (
		<div className='w-screen flex'>
			<div className='md:w-1/4 bg-slate-700 min-h-screen flex p-4 flex-col space-y-4 text-white'>
				<div>
					<a href="/">PHOTOS</a>
				</div>
				<div>
					<a href="/galleries">GALLERIES</a>
				</div>
			</div>
			<div className='grow flex flex-col'>
				<Navbar />
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