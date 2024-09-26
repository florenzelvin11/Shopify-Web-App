
# Shopify - React Application

This project is a React-based web application that fetches products from a Shopify collection and displays them in a responsive grid. It uses the Shopify Storefront API to retrieve product data.

## Environment Setup

### Step 1: Create a `.env.local` File

1. At the root of the project, create a `.env.local` file to store environment variables.
2. Add the following variables to the `.env.local` file:

   ```bash
   VITE_SHOPIFY_URL="https://example-myshopify.com/"
   VITE_SHOPIFY_API_TOKEN="your-shopify-api-token-here"
   ```

### Step 2: Install Dependencies

Before running the app, install all the necessary dependencies by running:

```bash
npm install
```

### Step 3: Run the Application

To start the development server, use the following command:

```bash
npm run dev
```

This will start the Vite development server. By default, it runs at [http://localhost:5173](http://localhost:5173), but this may vary based on your system configuration.

## Additional Notes

- For more information on setting up your Shopify Storefront API, visit the official [Shopify documentation](https://shopify.dev/docs/api/storefront).

