import React from 'react'

import { Routes, Route } from 'react-router-dom';
import ChangePassword from '../pages/ChangePassword';
import ForgotPassword from '../pages/ForgotPassword';
import Galleries from '../pages/Galleries';
import GalleryPhotos from '../pages/GalleryPhotos';
import Photos from '../pages/Photos';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';

const WebRoutes = () => (

	<Routes>


		<Route path='/' element={<ProtectedRoute redirectTo='/login'><Photos /></ProtectedRoute>} />
		<Route path='/galleries' element={<ProtectedRoute redirectTo='/login'><Galleries /></ProtectedRoute>} />
		<Route path='/galleries/:id' element={<ProtectedRoute redirectTo='/login'><GalleryPhotos /></ProtectedRoute>} />
		<Route path='/login' element={<SignIn />} />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/forgot-password' element={<ForgotPassword />} />
		<Route path='/change-password' element={<ChangePassword />} />
	</Routes>
)

export default WebRoutes