import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../redux/counter/counterActions'

// const Counter = (props) => {
// 	console.log(props);
//onClick plus передается в mapDispatchToProps()
const Counter = ({ defaultValue, plus, minus }) => { //деструктуризируем 
  return (
    <>
      <button onClick={() => plus(1)}>Increment</button> 
      <h2>{defaultValue}</h2>
      <button onClick={() => minus(1)}>Decrement</button>
    </>
  );
};

//reduxmap snipet
const mapStateToProps = state => { //чтение, досуп к состоянию
  console.log('state--->', state);
  return { defaultValue: state };
};

const mapDispatchToProps = dispatch => ({ //для изменения состояния
	plus: (param) => dispatch(increment(param)),
	minus: (param) => dispatch(decrement(param)),
}); 

//сокращенная запись
// const mapDispatchToProps = () => ({ 
// 	increment
// })

export default connect(mapStateToProps, mapDispatchToProps)(Counter);



