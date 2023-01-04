import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalProvider } from './Context/GlobalState';

const theme = createTheme({
	typography: {
		fontFamily: ['Roboto'].join(','),
	},
});

ReactDOM.render(
	<GlobalProvider>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</GlobalProvider>,
	document.getElementById('root')
);
