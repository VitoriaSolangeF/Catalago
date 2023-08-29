import React from "react";

import { BsCartPlusFill } from 'react-icons/bs'
import { LoadProdutos } from "../../utils/loadProdutos";

import './ProductCard.css'

function ProductCard() {

    const produtos = LoadProdutos();

    return (

        <>
            {produtos.map(produto => (

                <section key={produto.id} className="product-card">
                    <img src={produto.urlImage} alt={produto.description} className="card__image"/>

                    <div className="card__infos">
                        <h2 className="card__price">Descrição: {produto.description}</h2>
                        <p>Valor: R${produto.value}</p>
                        <p>Valor: Estoque:{produto.stock}</p>
                        <p>Valor: Referencia{produto.reference}</p>
                        <p>Valor: ID{produto.id}</p>
                    </div>
                </section>

            ))}
        </>
        
    );
}

export default ProductCard;