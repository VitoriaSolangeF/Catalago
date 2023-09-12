import React, { useMemo, useState } from "react";

import './ProductCard.css'
import { LoadProdutos } from "../utils/loadProdutos";
import Car from "../Car/Car";


function ProductCard({ produtos, busca }) {

    const [resultado, setResultado] = useState(0)

    // Função para receber valor do componente filho
    const updateResultado = r => {
        setResultado(r)
    }

    const [carrinho, setCarrinho] = useState([]);

    const addToCart = (produto) => {
        if (!carrinho.includes(produto)) {
            setCarrinho([...carrinho, produto]);
            
        } else {
            const carrinhoAtualizado = carrinho.filter((item) => item !== produto);
            setCarrinho(carrinhoAtualizado)
        }
        console.log(resultado)
    }

    const produtsFiltradas = useMemo(() => {
        return produtos.filter((produto) =>
        produto.description.toLowerCase().includes(busca.toLowerCase()));
    }, [produtos, busca]);
    
    return (
            <div className="container">
                {produtsFiltradas.map((produto) => (
                    <div key={produto.id} className="product_card">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src="https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png"/>
                        </a>
                        <div className="card_infos px-5 pb-5">
                            <a href="#">
                                <h5 className="descricao text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{produto.description}</h5>
                            </a>
                            <div className="container_card flex">
                                <span className="valor">R${produto.value}</span>
                                <span className="info">ID:{produto.id}</span>
                                <span className="info">Estoque: {resultado === 0 ? produto.stock : resultado}</span>
                                <span className="info">Cx: {produto.cx_und}</span>
                                <Car 
                                    addCard={carrinho.includes(produto)}
                                    produtoStock={produto.stock}
                                    produtoId={produto.id}
                                    produto={produto}
                                    handleResultado = {updateResultado} 
                                /> 
                                <button 
                                    onClick={() => addToCart(produto)} 
                                    href="#" 
                                    id={`${carrinho.includes(produto) ? 'button_car' : null}`}
                                    className="button_car bg-blue-700 text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <span className="icon_car">
                                        <ion-icon name={carrinho.includes(produto) ? "checkmark-outline" : "cart-outline"}></ion-icon>
                                        {carrinho.includes(produto) ? "Remover do Carrinho" : "Add Carrinho"}
                                        </span>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}
                
            </div>

    );
}
export default ProductCard;