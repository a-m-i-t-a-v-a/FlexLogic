const ProductsList = () => {
  const DUMMY_ARRAY=Array.from({length:30})
  return (
    <main className="product-list">
       <div className="product-header">
         <p>Showing 10 out of 18 products</p>
         <select>
            <option value="relevance">Most Relevant</option>
            <option value="price-asc">Price : Low to High</option>
            <option value="price-desc">Price : High to Low</option>
         </select>
       </div>
       <div className="product-grid">
          {DUMMY_ARRAY.map((_,index)=>(
            <div key={index} className="product-card">
              <h3>Product : {index+1}</h3>
              <p>Price $0</p>
            </div>
          ))}
       </div>
    </main>
  )
}

export default ProductsList
