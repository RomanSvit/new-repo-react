import Type from '../types';
// состояние для counter
export const reducer = (state = 0, { type, payload }) => {
  //если тип совпадает, то делается payload
  switch (type) {
    case Type.COUNTER_INCREMENT:
      return state + payload; // записывает в payload
    case Type.COUNTER_DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
