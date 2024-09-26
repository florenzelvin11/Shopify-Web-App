import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import { getAllProducts } from '../lib/shopify';
import ProdList from '../components/ProdList';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    window.scrollTo(0,0);
    const fetchProducts = async () => {
      try {
        const prods = await getAllProducts();
        setAllProducts(prods);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchProducts();
  },[]);

  return (
    <div>
      <Hero />
      <ProdList title="All Products" products={allProducts} isLoading={loading}/>
    </div>
  )
}

export default Home