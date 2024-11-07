/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        priceRange: [0, 1500],
        brand: [],
        availablity: 'In Stock'
    });
    const [sort, setSort] = useState('relevance');
    const [search, setSearch] = useState('');
    const [maxPrice, setMaxPrice] = useState(1500)

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                if (Array.isArray(data.products)) {
                    const formattedProducts = data.products.map(product => ({
                        id: product.id,
                        name: product.title,
                        category: product.category,
                        price: product.price,
                        brand: product.brand,
                        availability: product.stock > 0,
                        image: product.thumbnail
                    }));
                    setProducts(formattedProducts);

                    setCategories([...new Set(formattedProducts.map(product => product.category))]);
                    setBrands([...new Set(formattedProducts.map(product => product.brand).filter(Boolean))]);

                    const maxProductPrice = Math.max(...formattedProducts.map(product => product.price));
                    setMaxPrice(maxProductPrice);
                    setFilters((prev) => ({ ...prev, priceRange: [0, maxProductPrice] }));
                }
            } catch (error) {
                setError(error.message || "Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        .filter(product => filters.category.length > 0 ? filters.category.includes(product.category) : true)
        .filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
        .filter(product => filters.brand.length > 0 ? filters.brand.includes(product.brand) : true)
        .filter(product => filters.availablity ? product.availability === (filters.availablity === 'In Stock') : true)
        .sort((a, b) => {
            if (sort === 'price-asc') return a.price - b.price;
            if (sort === 'price-desc') return b.price - a.price;
            return 0; 
        });

    return (
        <ProductContext.Provider value={{
            products,
            filteredProducts,
            filters,
            setFilters,
            categories,
            brands,
            sort,
            setSort,
            search,
            setSearch,
            error,
            loading,
            maxPrice // Provide maxPrice to Sidebar
        }}>
            {children}
        </ProductContext.Provider>
    );
};
