import React, { Component } from "react";
import { store } from "../../store";
import { removeDish, updateQuantity } from "../../actions/cartActions";
import "./cartitem.css";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishName: props.children.dishName,
            price: props.children.price,
            quantity: props.children.quantity || 1, // Default quantity is 1
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1,
        }), () => {
            const { dishName, price, quantity } = this.state;
            const dish = { dishName, price, quantity };
            store.dispatch(updateQuantity(dish));
        });
    };

    handleDecrement = () => {
        const { quantity } = this.state;
        if (quantity > 1) {
            this.setState((prevState) => ({
                quantity: prevState.quantity - 1,
            }), () => {
                const { dishName, price, quantity } = this.state;
                const dish = { dishName, price, quantity };
                store.dispatch(updateQuantity(dish));
            });
        } else {
            this.removeItem();
        }
    };

    removeItem = () => {
        const { dishName, price, quantity } = this.state;
        const dish = { dishName, price, quantity };
        store.dispatch(removeDish(dish));
    };

    render() {
        const { dishName, price, quantity } = this.state;
        const totalPrice = price * quantity;

        return (
            <div className="cartItemFULL">
                <table className="itemTable">
                    <tr>
                        <td className="tdItem">{dishName}</td>
                        <td className="tdPrice">
                            <b>Price:</b> Rs{price}x{quantity} = Rs{totalPrice}
                        </td>
                        <td className="tdQuantity">
                            <button onClick={this.handleIncrement}>+</button>
                            <span>{quantity}</span>
                            <button onClick={this.handleDecrement}>-</button>
                        </td>
                        <td className="tdBttn">
                            <button className="bttn" onClick={this.removeItem}><i className="material-icons">delete_forever</i></button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CartItem;
