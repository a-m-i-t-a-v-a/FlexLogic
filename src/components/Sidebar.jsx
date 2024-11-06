const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>CATEGORIES</h2>
      <input type="checkbox"/>
      <label>Electronics & Gadgets</label>
      <h2>PRICE</h2>
      <input type="range" min="0" max="1500"/>
      <p>Price range $0 - $1500</p>
      <h2>BRANDS</h2>
      <input type="checkbox"/>
      <label>Bose</label>
      <h2>AVAILABLITY</h2>
      <select>
        <option>In Stock</option>
        <option>Out of stock</option>
      </select>
    </aside>
  )
}

export default Sidebar
