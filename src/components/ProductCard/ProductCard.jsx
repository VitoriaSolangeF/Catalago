import React from "react";

import './ProductCard.css'
import { LoadProdutos } from "../../utils/loadProdutos";

function ProductCard() {

    const produtos = LoadProdutos();

    return (
        <>
            {produtos.map(produto => (
                <div key={produto.id} className="product-card grid grid-cols-2 gap-2">
                    <div>
                        <img src={produto.urlImage} alt={produto.description} className="h-auto max-w-full rounded-lg " />
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
        </>
    );
}
export default ProductCard;