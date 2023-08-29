import React from "react";

import { BsCartPlusFill } from 'react-icons/bs'

import './ProductCard.css'

function ProductCard() {
    return (

        <section className="product-card">
           
            <img src="Fone.png" alt="product" className="card__image" />

            <div className="card__infos">
                <h2 className="card__price">R$ 75,00</h2>
                <h2 className="card__title">Fone Kimaster</h2>
            </div>
            <button type="button" className="button__add-cart">
                <BsCartPlusFill />
            </button>
        </section>
        
    );
}

export default ProductCard;