import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"

const ProductsList = () => {
  const {filteredProducts,products,sort,setSort}=useContext(ProductContext)
  return (
    <main className="product-list">
       <div className="product-header">
         <p>Showing {filteredProducts.length} out of {products.length} products</p>
         <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="relevance">Most Relevant</option>
            <option value="price-asc">Price : Low to High</option>
            <option value="price-desc">Price : High to Low</option>
         </select>
       </div>
       <div className="product-grid">
          {filteredProducts.map((product)=>(
            <ProductCard 
                key={product.id} 
                name={product.name} 
                image={product.image} 
                category={product.category} 
                price={product.price}
            />
          ))}
       </div>
    </main>
  )
}

export default ProductsList
