// src/App.js
import React, { useState } from 'react';
import Header from './components/header';
import ProductList from './components/ProductList';
import './App.css';
import { products } from './data/products';
import Filters from './components/filters';
import './components/ProductCard';

function App() {
  // State for search, category filter, sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOption, setSortOption] = useState('none');

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filtering products
  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => categoryFilter === 'All' || p.category === categoryFilter)
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
