import React from "react";
import goods from '../../goods.json';
import { connect } from 'react-redux';
import { addGood } from '../../redux/cart/actionCreator'

const Card = (props) => {
    return (
        <div>
            <h2>In cart {props.cart.length} goods</h2>
            <ul style={{ listStyle: "none", border: "2px solid black", padding: "5px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {goods.map(({ id, name, description, price }) => <li key={id}
                    style={{ border: "2px solid black", padding: "5px", width: "200px", height: "170px", margin: "5px" }}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <button id={id} onClick={() => props.addGood(id)}>Add to cart</button>
                </li>)}
            </ul>
        </div>
    );
}



const mapStateToProps = (state) => ({
    cart: state.cart
})




export default connect(mapStateToProps, { addGood })(Card)
