import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	navbar: {
		position: 'fixed',
		top: '0',
		background: 'white',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '70px',
		width: '100%',
		padding: '20px 50px',
		border: '1px solid gray',
		boxShadow: '-1px 2px 5px 0px rgba(232,232,232,1)',
		[theme.breakpoints.down('sm')]: {
			padding: '5px 20px',
		},
	},
	logo: {
		width: '50px',
		height: '50px',
		[theme.breakpoints.down('sm')]: {
			width: '30px',
			height: '30px',
		},
	},
	button: {
		border: '1px solid gray',
		borderRadius: '15px',
		color: 'gray',
		backgroundColor: 'white',
		marginRight: '25px',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	links: {
		textDecoration: 'none',
		listStyle: 'none',
	},
}));
