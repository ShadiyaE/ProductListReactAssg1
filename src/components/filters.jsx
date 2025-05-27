// src/Filters.js
import React from 'react';

function Filters({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  categories,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="none">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Filters;
