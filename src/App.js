import React, { useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import Carregadores from "./components/Categorys/Categorys";
import Banner2 from "./components/Banner2/Banner2";
import { LoadProdutos } from './components/utils/loadProdutos'; 

function App() {

  const [busca, setBusca] = useState('');
  const produtos = LoadProdutos();

  console.log(busca)

  return (
    <div className='app'>
        <Header value={busca} onChange={(e) => setBusca(e.target.value)} />
          <div className="Banner">
            <Banner />

          <div className="Banner2">
            <Banner2 />.
          </div>

          <div className="Carregadores">
            <Carregadores produtos={produtos} busca={busca}/>.
          </div>

          </div>
          <div className="card-container">
            <ProductCard produtos={produtos} busca={busca}  />
          </div>
      </div>
  );
}

export default App;
