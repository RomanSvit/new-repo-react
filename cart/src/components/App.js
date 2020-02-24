import React, { Component } from 'react'
import Card from "./card/Card";
import Cart from "./cart/Cart";

class App extends Component {
    state = {
        isOpen: false
    }

    openCart = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }
    render() {
        return (
            <div>
                <button onClick={this.openCart}>{this.state.isOpen ? "HideCart" : "Show cart"}</button>
                {this.state.isOpen && <Cart />}
                <Card />
            </div>

        );
    }
}

export default App;
