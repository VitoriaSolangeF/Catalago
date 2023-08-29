import React from "react";
import { MdOutlineWhatsapp } from 'react-icons/md';

import './CartButton.css';

function CartButton() {
    return (
        <button type="button" className="cart__button">
            < MdOutlineWhatsapp />
            <span className="cart-status"></span>
        </button>
    );
}

export default CartButton;