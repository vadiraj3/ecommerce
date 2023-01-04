import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Box, Rating, Button, Divider } from '@mui/material';
import { GlobalContext } from './../../Context/GlobalState';

const ProductDetail = () => {
	const { id } = useParams();
	const [productDetail, setProductDetail] = useState([]);
	const [ratingValue, setRatingValue] = useState(0);
	const { addToCart } = useContext(GlobalContext);

	useEffect(async () => {
		try {
			const { data } = await axios.get(
				`https://fakestoreapi.com/products/${id}`
			);
			setProductDetail(data);
			setRatingValue(data.rating.rate);
		} catch (error) {}
	}, []);
	return (
		<Box display="flex" justifyContent="center" gap="80px">
			<Box>
				<img
					src={productDetail.image}
					width="300px"
					height="450px"
					alt={productDetail.title}
				/>
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold" gutterBottom>
					{productDetail.title}
				</Typography>
				<Typography variant="subtitle1" gutterBottom fontSize="16px">
					{productDetail.description}
				</Typography>
				<Box display="flex" justifyContent="space-between" marginBottom="20px">
					<Rating value={ratingValue} precision={0.1} />

					<span>{productDetail?.rating?.count} ratings</span>
					<span style={{ textTransform: 'capitalize', fontWeight: '500' }}>
						{productDetail.category}
					</span>
				</Box>
				<Typography variant="h6" fontWeight="bold" fontSize="22px">
					<span> &#8377;</span>

					{productDetail.price}
				</Typography>
				<Divider style={{ marginBottom: '20px' }} />
				<Button variant="outlined" onClick={() => addToCart()}>
					Add to Cart
				</Button>
			</Box>
		</Box>
	);
};

export default ProductDetail;
