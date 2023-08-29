import React from 'react';
import ProductList from './ProductList'; // Importe o componente ProductList ou qualquer outro componente necessário

function ProductPage() {
  const productsData = [
    {
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      price: 29.99
    },
    {
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      price: 19.99
    },
    // Adicione mais produtos aqui
  ];

  return (
    <div>
      <h2>Nossos Produtos</h2>
      <ProductList products={productsData} /> {/* Renderize o componente ProductList com os dados dos produtos */}
    </div>
  );
}

export default ProductPage;
