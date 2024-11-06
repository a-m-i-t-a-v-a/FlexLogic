/* eslint-disable react/prop-types */
const ProductCard = ({name,image,category,price}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price}</p>
    </div>
  )
}

export default ProductCard
