import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsInCollection } from '../lib/shopify';
import ProdList from '../components/ProdList';

const Collection = () => {
  const params = useParams();
  const collectionType = params.colType;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const prods = await getProductsInCollection(collectionType);
        setProducts(prods);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='w-full'>
      <ProdList
        title={`${collectionType.toString().toUpperCase()} Collection`}
        products={products}
        isLoading={loading}
      />
    </div>
  )
}

export default Collection