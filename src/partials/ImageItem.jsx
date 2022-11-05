import React, { useState } from 'react'

const ImageItem = (props) => {

	const [isVisible, setIsVisible] = useState(false)

	return (
		<figure onMouseEnter={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)} className="bg-slate-100 rounded shadow-md relative md:h-48 flex justify-center items-center  cursor-pointer filter hover:grayscale">
			<a href="/">
				<img className="md:h-48 object-cover" src={props.item.image} alt={props.item.title} />
			</a>
			<figcaption className={`absolute inset-x-0 opacity-75 bottom-0 text-lg text-white ${isVisible? 'visible': 'invisible'}`}>
				<p className='bg-gray-700 text-slate-200 p-1 '>{props.item?.title}</p>
				<p className='bg-gray-700 text-slate-200 p-1 text-sm'>{props.item?.description}</p>
			</figcaption>
		</figure>
	)
}

export default ImageItem