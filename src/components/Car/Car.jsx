import { useState } from 'react'
import './Car.css'

const Car = ({ addCard, produtoStock, produto, produtoId, quantidade, handleQuantidade }) => {
    const [novaQuantidade, setNovaQuantidade] = useState(quantidade);

    const handleQuantidadeChange = (e) => {
        const novaQuantidade = parseInt(e.target.value);
        setNovaQuantidade(novaQuantidade);
        handleQuantidade(produtoId, novaQuantidade);
    };

    const estoqueDisponivel = isNaN(novaQuantidade) ? produtoStock : produtoStock - novaQuantidade;

    if (!addCard) {
        return (
            <>
                <div>
                    <span className="info">Estoque: {estoqueDisponivel}</span>
                </div>
                <div id='title_car'>
                    <label htmlFor="visitors" className="descricao descricaoCar block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade:</label>
                </div>
                <input
                    onChange={handleQuantidadeChange}
                    value={novaQuantidade}
                    max={produtoStock}
                    min={0}
                    type="number"
                    id="quantidade"
                    className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                />

            </>
        );
    }
}

export default Car;
