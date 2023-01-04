import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import useStyles from './styles';
import { GlobalContext } from '../../Context/GlobalState';
import { useNavigate } from 'react-router-dom';
import CableIcon from '@mui/icons-material/Cable';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import DiamondIcon from '@mui/icons-material/Diamond';

const Sidebar = () => {
	const { changeCategory } = useContext(GlobalContext);
	const classes = useStyles();
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);

	const categoryIcons = {
		electronics: <CableIcon />,
		"men's clothing": <ManIcon />,
		"women's clothing": <WomanIcon />,
		jewelery: <DiamondIcon />,
	};

	useEffect(async () => {
		try {
			const { data: categories } = await axios.get(
				'https://fakestoreapi.com/products/categories '
			);
			setCategories(categories);
		} catch (error) {}
	}, []);

	const handleCategoryChange = (category) => {
		changeCategory(category);
		navigate('/');
	};

	return (
		<Drawer
			sx={{
				width: '240px',

				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: '240px',
					boxSizing: 'border-box',
				},
			}}
			classes={{
				paper: classes.drawerPaper,
			}}
			variant="permanent"
			anchor="left"
		>
			<List>
				{categories.map((text, index) => (
					<ListItem
						key={text}
						disablePadding
						onClick={() => handleCategoryChange(text)}
					>
						<ListItemButton>
							<ListItemIcon>{categoryIcons[text]}</ListItemIcon>
							<ListItemText
								style={{ textTransform: 'capitalize' }}
								primary={text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
