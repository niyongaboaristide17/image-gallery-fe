import React from 'react'

import { Routes, Route } from 'react-router-dom';
import ChangePassword from '../pages/ChangePassword';
import ForgotPassword from '../pages/ForgotPassword';
import Photos from '../pages/Photos';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const WebRoutes = () => (

	<Routes>
		<Route path='/' element={<Photos/>} />
		<Route path='/login' element={<SignIn/>} />
		<Route path='/signup' element={<SignUp/>} />
		<Route path='/forgot-password' element={<ForgotPassword/>} />
		<Route path='/change-password' element={<ChangePassword/>} />
	</Routes>
)

export default WebRoutes