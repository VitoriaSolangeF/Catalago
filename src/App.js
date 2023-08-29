import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";


function App() {
  return (
      <div className='conteúdo'>
        <Header/>
          <main className='container'>
            <ProductCard />
          </main>
      </div>
  );
}

export default App;
