import { useState } from 'react'
import './Car.css'
import { LoadProdutos } from '../utils/loadProdutos';

const Car = ({ addCard, produto, handleResultado }) => {

    const [quantidade, setQuantidade] = useState();
    const produtos = LoadProdutos();

    const handleQuantidade = (e) => {
        setQuantidade(e.target.value);

        const quantidadeFinal = produto - e.target.value

        handleResultado(quantidadeFinal)
        console.log(quantidadeFinal);
    }


    if(!addCard) {
        return(
            <>
                <div id='title_car'>
                    <label htmlFor="visitors" className="descricao descricaoCar block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade:</label>
                </div>
                <input 
                    onChange={handleQuantidade} 
                    value={quantidade} 
                    max={produto} 
                    min={0} 
                    type="number" 
                    id="quantidade" 
                    className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="" 
                    required
                />
            </>
        )
    } 
}

export default Car