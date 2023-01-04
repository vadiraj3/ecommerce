import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	containerSpaceAround: {
		display: 'flex',
		justifyContent: 'space-around',
		margin: '10px 0px !important',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			flexWrap: 'wrap',
		},
	},
	image: {
		width: '200px',
		height: '300px',
	},
	item: {
		textAlign: 'center',
		marginBottom: '50px',
	},
}));
