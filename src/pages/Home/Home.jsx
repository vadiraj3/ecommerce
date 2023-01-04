import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Tooltip, Rating } from '@mui/material';
import { GlobalContext } from '../../Context/GlobalState';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Home = () => {
	const classes = useStyles();
	const [products, setProducts] = useState([]);
	const { category } = useContext(GlobalContext);

	useEffect(async () => {
		try {
			if (category == 'all') {
				const { data } = await axios.get(`https://fakestoreapi.com/products`);
				setProducts(data);
			} else {
				const { data } = await axios.get(
					`https://fakestoreapi.com/products/category/${category}`
				);
				setProducts(data);
			}
		} catch (error) {
			console.log(error);
		}
	}, [category]);

	return (
		<Box>
			<Grid container className={classes.containerSpaceAround}>
				{products.map((product) => (
					<Grid
						item
						lg={3}
						sm={12}
						mx={2}
						key={product.id}
						className={classes.item}
					>
						<Link
							to={`product-detail/${product.id}`}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<img className={classes.image} src={product.image} />
							<Typography variant="subtitle1" gutterBottom>
								{product.title}
							</Typography>
							<Typography variant="subtitle2" fontWeight="bold" gutterBottom>
								<span> &#8377;</span>
								{product.price}
							</Typography>
							<Box
								display="flex"
								alignItems="center"
								gap="7px"
								justifyContent="center"
							>
								<Rating value={product.rating.rate} precision={0.1} />
								<span>({product.rating.count})</span>
							</Box>
						</Link>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Home;
