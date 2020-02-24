import React from "react";
import { connect } from "react-redux";
import { deleteGood } from '../../redux/cart/actionCreator';
import shortid from "shortid";

const Cart = props => {
    return <div>
        <ul style={{ listStyle: "none", border: "2px solid black", padding: "5px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {props.cart.map(({ id, name, description, price }) => <li key={shortid()}
                style={{ border: "2px solid black", padding: "5px", width: "200px", height: "170px", margin: "5px" }}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <button id={id} onClick={() => props.deleteGood(id)}>Delete from cart</button>
            </li>)}
        </ul>
    </div>;
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, { deleteGood })(Cart);
