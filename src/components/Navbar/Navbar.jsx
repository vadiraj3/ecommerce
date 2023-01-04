import React, { useContext, useState, useEffect } from 'react';
import {
	Typography,
	Box,
	FormControl,
	OutlinedInput,
	useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './styles';
import react from '../../assets/react.png';
import { GlobalContext } from './../../Context/GlobalState';

const Navbar = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');
	const { changeCategory, cart } = useContext(GlobalContext);
	const [dropDown, setDropDown] = useState(false);
	const [products, setProducts] = useState([]);
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [searchDisplay, setSearchDisplay] = useState(false);

	useEffect(async () => {
		try {
			const { data } = await axios.get(`https://fakestoreapi.com/products`);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleProfileClick = () => {
		if (dropDown) {
			setDropDown(false);
		}
	};

	const handleSearch = ({ target: { value } }) => {
		setSearch(value);
		let filteredProducts = products.filter(
			({ title }) => title.startsWith(value) || title.includes(value)
		);
		filteredProducts.length > 0 && filteredProducts.length != 20
			? setSearchDisplay(true)
			: setSearchDisplay(false);
		setSearchedProducts(filteredProducts);
	};
	return (
		<Box className={classes.navbar} onClick={handleProfileClick}>
			<Box onClick={() => changeCategory('all')}>
				<Link to="/">
					<img src={react} className={classes.logo} />
				</Link>
			</Box>
			<FormControl>
				<OutlinedInput
					size="small"
					sx={{ width: { xs: '250px', sm: '300px', md: '400px', lg: '600px' } }}
					placeholder="Search"
					value={search}
					onChange={handleSearch}
				/>
			</FormControl>
			{searchDisplay && (
				<Box
					border="2px solid black"
					padding="5px"
					position="absolute"
					top="60px"
					sx={{
						left: { lg: '356px', xs: '200px' },
						width: { lg: '600px', xs: '250px' },
						zIndex: '78',
					}}
					left="356px"
					backgroundColor="#FFF"
				>
					{searchedProducts.map((item) => (
						<Typography
							key={item.title}
							variant="subtitle1"
							fontSize="20"
							gutterBottom
						>
							{item.title}
						</Typography>
					))}
				</Box>
			)}
			<Box style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<ShoppingCartIcon sx={{ fontSize: 35, color: 'gray' }} />
				{cart > 0 && (
					<div
						style={{
							width: '20px',
							height: '20px',
							backgroundColor: 'red',
							borderRadius: '50%',
							paddingBottom: '3px',
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
							justifyItems: 'center',
							marginBottom: '23px',
							marginLeft: '-27px',
							color: 'white',
						}}
					>
						{cart}
					</div>
				)}

				<AccountCircleIcon
					sx={{ fontSize: 35, color: 'yellow' }}
					onClick={() => setDropDown(true)}
				/>
				{dropDown && (
					<Box
						position="absolute"
						top="55px"
						right="10px"
						border="1px solid black"
						borderRadius="5px"
						backgroundColor="white"
						padding="10px"
					>
						<Typography>My Profile</Typography>{' '}
						<Typography>My Gadgets</Typography>{' '}
						<Typography>Sign Out</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Navbar;
