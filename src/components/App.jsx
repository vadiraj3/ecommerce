import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from './Navbar/Navbar';
import { CssBaseline } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import ProductDetail from './../pages/ProductDetail/ProductDetail';

const App = () => {
	return (
		<Box>
			<Navbar />
			<CssBaseline />
			<Sidebar />
			<Box marginLeft="240px" padding="40px 80px" marginTop="70px">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Home />} />
					<Route path="/product-detail/:id" element={<ProductDetail />} />
					<Route path="/profile" element={<Home />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default App;
