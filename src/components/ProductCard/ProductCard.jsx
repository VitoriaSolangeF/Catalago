import React from "react";

import './ProductCard.css'
import { LoadProdutos } from "../utils/loadProdutos";

function ProductCard() {

    const produtos = LoadProdutos();

    return (
        <div className="container">
            {produtos.map(produto => (

                <section key={produto.id} className="product-card">
                
                    <img src="fone.png" alt="fone" className="card__image" />

                    <div className="card__infos">
                        <h2 class="descricao">Descrição: {produto.description}</h2>
                        <p class="valor">Valor: R${produto.value}</p>
                        <p class="id">ID: R${produto.id}</p>
                        <p class="stock1">Stock: {produto.stock}</p>
                        <p class="stock2">Stock: {produto.reference}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
export default ProductCard;