const SHOPIFY_URL = import.meta.env.VITE_SHOPIFY_URL
const API_TOKEN = import.meta.env.VITE_SHOPIFY_API_TOKEN 

console.log(import.meta.env.API_TOKEN)

async function ShopifyData(query) {
  const URL = `${SHOPIFY_URL}api/2024-07/graphql.json`
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": API_TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getProductsInCollection(handle) {
  const query = `{
    collection(handle: "${handle}") {
      title
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            availableForSale
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  console.log(response)

  const allProducts = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `{
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          availableForSale
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  console.log(response)

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}