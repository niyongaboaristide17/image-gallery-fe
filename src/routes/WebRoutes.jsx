import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Photos from '../pages/Photos';

const WebRoutes = () => (

	<Routes>
		<Route path='/' element={<Photos/>} />
	</Routes>
)

export default WebRoutes