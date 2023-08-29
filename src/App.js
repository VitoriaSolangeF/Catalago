import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="app">

      <Header />

      <div className='conteúdo'>
        <main className='container'>
          <ProductCard />
        </main>
      </div>
      
    </div>
  );
}

export default App;
