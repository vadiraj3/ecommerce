import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	cart: 0,
	category: 'all',
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	//Actions
	const addToCart = (num) => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: num,
		});
	};

	const changeCategory = (category_type) => {
		console.log(category_type);
		dispatch({
			type: 'CHANGE_CATEGORY',
			payload: category_type,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				cart: state.cart,
				category: state.category,
				productList: state.products,
				addToCart,
				changeCategory,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
