import { useContext } from "react"
import { FaSearch, FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { ProductContext } from "../context/ProductContext"

const Header = () => {
  const {search,setSearch}=useContext(ProductContext)
  return (
    <div className="header">
      <div className="brand-name">Flexlogic</div>
      <div className="navlinks">
        <a href='#'>Home</a>
        <a href='#'>Pages</a>
        <a href='#'>Shop</a>
        <a href='#'>Blog</a>
      </div>
      <div className="icons">
        <span className="search-item">
            <input type="text" placeholder="Search products" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch/>
        </span>
        <span>
            <FaUser/>
            <FaCartShopping/>
        </span>
      </div>
    </div>
  )
}

export default Header
