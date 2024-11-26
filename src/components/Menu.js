import React, { useState } from "react";

const Menu = ({ items, cart, setCart }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter items based on selected category
  const filterItems = (category) => {
    setActiveCategory(category);
  };

  // Add selected item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  // Filter items based on active category
  const filteredItems = activeCategory === "all"
    ? items
    : items.filter(item => item.category === activeCategory);

  // Get unique categories dynamically from the items
  const categories = ["all", ...new Set(items.map(item => item.category))];

  return (
    <div>
      <h2>Menu</h2>
      
      {/* Category Filter Buttons */}
      <div>
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => filterItems(category)}
            style={{ 
              margin: '0 10px', 
              padding: '5px 15px', 
              backgroundColor: activeCategory === category ? 'lightblue' : '' 
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize category names */}
          </button>
        ))}
      </div>

      {/* Display Items Based on Filter */}
      <div>
        {filteredItems.length === 0 ? (
          <p>No items found in this category.</p>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(item)} 
                style={{ padding: '5px 10px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
