import React, { useState } from 'react'
import ProductWidget from './ProductWidget'
import Loading from './Loading';

const ProdList = ({ title = '', products, isLoading = false }) => {

  const [isSorted, setIsSorted] = useState(false);

  const toggleSort = () => setIsSorted(prev => !prev);

  const sortedProdList = [...products].sort((a, b) => {
    if (isSorted) {
      return a.node.title.localeCompare(b.node.title);
    }
    return 0;
  });

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='flex items-center justify-between'>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {title}
          </h2>
          <button
            onClick={toggleSort}
            className="hidden sm:block mb-4 bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded"
          >
            {isSorted ? "Remove Alphabetical Sort" : "Sort Alphabetically"}
          </button>

          <button
            onClick={toggleSort}
            className="sm:hidden mb-4 bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded"
          >
            {isSorted ? "Unsort" : "Sort"}
          </button>
        </div>
        {
          isLoading
            ?
            <div className='w-full flex justify-center'>
              <Loading />
            </div>
            :
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {
                sortedProdList.map(product => (
                  <ProductWidget key={product.node.id} product={product} />
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default ProdList