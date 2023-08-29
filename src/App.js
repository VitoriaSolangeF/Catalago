import React from "react";

import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className='app'>
        <Header/>
        
          <div className="card-container">
            <ProductCard/>
          </div>
      </div>
  );
}

export default App;
