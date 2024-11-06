/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext()

export const ProductProvider=({children})=>{
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    const [brands,setBrands]=useState([])
    const [error,setError]=useState('')
    const [filters,setFilters]=useState({
        category:[],
        priceRange:[0,500],
        brand:[],
        availablity:'In Stock'
    })
    const [sort,setSort]=useState('relevance')
    const [search,setSearch]=useState('')

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await fetch('https://dummyjson.com/products');
                const data=await response.json()
                if(Array.isArray(data.products)){
                    const formattedProducts=data.products.map(product=>({
                        id:product.id,
                        name:product.title,
                        category:product.category,
                        price:product.price,
                        brand:product.brand,
                        availablity:product.stock>0,
                        image:product.thumbnail
                    }))
                    setProducts(formattedProducts)
                    //Now for the categories and brands in the sidebar using Set data structure to remove duplicates
                    const uniqueCategories=[...new Set(formattedProducts.map(product=>product.category))];
                    const uniqueBrands=[...new Set(formattedProducts.map(product=>product.brand))];
                    setCategories(uniqueCategories);
                    setBrands(uniqueBrands)
                }
            }catch(error){
                setError(error)
            }
        }
        fetchProducts()
    },[])

    const filteredProducts=products
        .filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
        .filter(product=>filters.category.length>0 ? filters.category.includes(product.category) : true)
        .filter(product=>product.price>=filters.priceRange[0] && product.price<=filters.priceRange[1])
        .filter(product=>filters.brand.length>0 ? filters.brand.includes(product.brand) : true)
        .filter(product=>filters.availablity ? product.availablity===filters.availablity : true)
        .sort((a,b)=>{
            if(sort==='price-asc') return a.price-b.price
            if(sort==='price-desc') return b.price-a.price
        })
    
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
            error
        }}>
            {children}
        </ProductContext.Provider>
    )
}