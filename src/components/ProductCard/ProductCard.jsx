import React from "react";

import './ProductCard.css'
import { LoadProdutos } from "../utils/loadProdutos";

function ProductCard() {

    const produtos = LoadProdutos();

    return (
        <div className="container">
            {produtos.map(produto => (

                <section key={produto.id} className="product-card">
                
                    <img src={produto.urlImage} alt="fone" className="card__image" />

                    <div className="card__infos">
                        <h2 class="descricao">{produto.description}</h2>
                        <p class="valor">Atacado: R${produto.value}</p>
                        <p class="id">ID:{produto.id}</p>
                        <p class="stock">Estoque: {produto.stock}</p>
                        <p class="cx_und">Cx: {produto.cx_und}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
export default ProductCard;