import React, { useState } from "react";
import ProductWidget from "./ProductWidget";
import Loading from "./Loading";

const ProdList = ({ title = "", products, isLoading = false }) => {
  const [sortOption, setSortOption] = useState("default");

  const sortProducts = () => {
    if (sortOption === "name") {
      return [...products].sort((a, b) =>
        a.node.title.localeCompare(b.node.title)
      );
    } else if (sortOption === "price") {
      return [...products].sort(
        (a, b) =>
          parseFloat(a.node.priceRange.minVariantPrice.amount) -
          parseFloat(b.node.priceRange.minVariantPrice.amount)
      );
    } else {
      return products;
    }
  };

  // Apply sorting function
  const sortedProducts = sortProducts();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {title}
          </h2>
         <select
            className="p-0 appearance-none sm:appearance-auto sm:p-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default" hidden>Sort Items</option>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {sortedProducts.map((product) => (
              <ProductWidget key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdList;
