import React from 'react'
import { Link } from 'react-router-dom'
import { formatter } from '../utils/helpers'

const ProductWidget = ({ product }) => {
  const { handle, title } = product.node

  const { altText, url } = product.node.images.edges[0]?.node || { altText: title, url: '' }

  const price = product.node.priceRange.minVariantPrice.amount

  const isAvailable = product.node.availableForSale

  return (
    <Link
      to={`/products/${handle}`}
      className="group"
    >

      <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
        <div className="relative group-hover:opacity-75 h-72">
          <img
            src={url}
            alt={altText}
            className="w-full h-full object-cover"
          />

          {!isAvailable && (
            <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded-full">
              Sold Out
            </span>
          )}
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
    </Link>
  )
}

export default ProductWidget