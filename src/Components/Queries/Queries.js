import { gql } from '@apollo/client';

const getProductsQuery = gql `
query {
    category {
      name
      products {
        id
        name
        inStock
        brand
        gallery
        description
        category
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`

export {getProductsQuery};