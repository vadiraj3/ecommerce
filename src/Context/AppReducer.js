export default (state, action) => {
	const { payload, type } = action;
	console.log(payload);
	switch (type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: state.cart + 1,
			};

		case 'CHANGE_CATEGORY':
			return {
				...state,
				category: payload,
			};

		default:
			return state;
	}
};
