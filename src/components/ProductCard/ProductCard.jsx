import React from "react";

import './ProductCard.css'
import { LoadProdutos } from "../utils/loadProdutos";

function ProductCard() {

    const produtos = LoadProdutos();

    return (
        <div className="container">
            {produtos.map(produto => (
                <div key={produto.id} className="product-card">
                    <div>
                        <img src={produto.urlImage} alt={produto.description} className="card__image" />
                        <div className="card__infos">
                                <p>ID: {produto.id}</p>
                                <h2>Descrição: {produto.description}</h2>
                                <p>Valor: R$ {produto.value}</p>
                                <p>Estoque: {produto.stock}</p>
                                <p>Referencia: {produto.reference}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductCard;