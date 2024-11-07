import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Sidebar = () => {
  const { categories, brands, filters, setFilters, maxPrice } = useContext(ProductContext);

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category) 
        ? prev.category.filter((c) => c !== category) 
        : [...prev.category, category]
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brand: prev.brand.includes(brand) 
        ? prev.brand.filter((b) => b !== brand) 
        : [...prev.brand, brand]
    }));
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setFilters((prev) => ({ ...prev, priceRange: [0, value] }));
  };

  return (
    <aside className="sidebar">
      <h2>CATEGORIES</h2>
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            checked={filters.category.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label>{category}</label>
        </div>
      ))}

      <h2>PRICE</h2>
      <input
        type="range"
        min="0"
        max={maxPrice}
        value={filters.priceRange[1]}
        onChange={handlePriceChange}
      />
      <p>Price range ${filters.priceRange[0]} - ${filters.priceRange[1]}</p>

      <h2>BRANDS</h2>
      {brands.map((brand) => (
        <div key={brand}>
          <input
            type="checkbox"
            checked={filters.brand.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />
          <label>{brand}</label>
        </div>
      ))}

      <h2>AVAILABILITY</h2>
      <select
        value={filters.availablity}
        onChange={(e) => setFilters((prev) => ({ ...prev, availablity: e.target.value }))}
      >
        <option value="In Stock">In Stock</option>
        <option value="Out of stock">Out of stock</option>
      </select>
    </aside>
  );
};

export default Sidebar;
