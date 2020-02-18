import Type from '../types'

export const increment = (value) => ({
	type: Type.COUNTER_INCREMENT,
	payload: value //то что возвращается
});

export const decrement = (value) => ({
	type: Type.COUNTER_DECREMENT,
	payload: value 
});