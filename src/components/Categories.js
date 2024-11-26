// src/components/Categories.js
import React from "react";

const Categories = ({ categories, activeCategory, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={activeCategory === category ? "active" : ""}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
