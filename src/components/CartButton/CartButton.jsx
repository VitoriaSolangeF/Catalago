import React from "react";
import { MdOutlineWhatsapp } from 'react-icons/md';

import './CartButton.css';

function CartButton() {
    return (
        <button className="button_whatapp" type="button">
            <MdOutlineWhatsapp className="cart__button"/>
            <span className="cart-status"></span>
        </button>
    );
}

export default CartButton;