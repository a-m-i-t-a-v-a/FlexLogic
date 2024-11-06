import { FaSearch, FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"

const Header = () => {
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
            <input type="text" placeholder="Search products"/>
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
