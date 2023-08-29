import React from "react";

import './ProductCard.css'
import { LoadProdutos } from "../../utils/loadProdutos";

function ProductCard() {

    const produtos = LoadProdutos();

    return (
        <>
            {produtos.map(produto => (

                <section key={produto.id} className="product-card">
                
                    <img src="fone.png" alt="fone" className="card__image" />

                    <div className="card__infos">
                        <h2>Descrição: {produto.description}</h2>
                        <p>Valor: R${produto.value}</p>
                        <p>ID: R${produto.id}</p>
                        <p>Stock: {produto.stock}</p>
                        <p>Stock: {produto.reference}</p>
                    </div>
                </section>
            ))}
        </>
    );
}
export default ProductCard;