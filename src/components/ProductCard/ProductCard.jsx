import React, { useMemo } from "react";

import './ProductCard.css'
import { LoadProdutos } from "../utils/loadProdutos";

function ProductCard({ produtos, busca }) {

    const produtsFiltradas = useMemo(() => {
        return produtos.filter((produto) =>
        produto.description.toLowerCase().includes(busca.toLowerCase()));
    }, [produtos, busca]);
    
    return (
        <div className="container">
            {produtsFiltradas.map((produto) => (
                <section key={produto.id} className="product-card">
                    <img src={produto.urlImage} alt="fone" className="card__image" />

                    <div className="card__infos">
                        <h2 className="descricao">{produto.description}</h2>
                        <p className="valor">Atacado: R${produto.value}</p>
                        <p className="id">ID:{produto.id}</p>
                        <p className="stock">Estoque: {produto.stock}</p>
                        <p className="cx_und">Cx: {produto.cx_und}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
export default ProductCard;