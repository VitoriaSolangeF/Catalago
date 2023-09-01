import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import Carregadores from "./components/Categorys/Categorys";
import Banner2 from "./components/Banner2/Banner2";
import { LoadProdutos } from './components/utils/loadProdutos'; 
import whatapp from './assets/whatsapp.png'

function App() {
  const [busca, setBusca] = useState('');
  const produtos = LoadProdutos();

  useEffect(() => {
    const isPageReloaded = localStorage.getItem('isPageReloaded');
    if (!isPageReloaded) {
      localStorage.setItem('isPageReloaded', 'true');
    } else {
      localStorage.removeItem('isPageReloaded');
      document.querySelector('.content').classList.add('pulse-animation');
    }
  }, []);

  return (
    <div className='app'>
        <Header value={busca} onChange={(e) => setBusca(e.target.value)} />
          <div className="Banner">
            <Banner />
          </div> 

          <div className="Banner2">
            <Banner2 />
          </div>

          <div className="Carregadores">
            <Carregadores produtos={produtos} busca={busca}/>.
          </div>

          <div className="card-container">
            <ProductCard produtos={produtos} busca={busca}  />

            <div className="content"> {/* Aplicar a classe dinamicamente */}
              <img src={whatapp} alt="" />
            </div>
          </div>
      </div>
  );
}

export default App;






