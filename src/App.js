import React from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import Carregadores from "./components/Categorys/Categorys";
import Banner2 from "./components/Banner2/Banner2";

function App() {
  return (
    <div className='app'>
        <Header/>
          <div className="Banner">
            <Banner />

          <div className="Banner2">
            <Banner2 />
          </div>

          <div className="Carregadores">
            <Carregadores />.
          </div>

          </div>
          <div className="card-container">
            <ProductCard/>
          </div>
      </div>
  );
}

export default App;
