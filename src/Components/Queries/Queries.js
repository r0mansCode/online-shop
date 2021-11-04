import { gql } from '@apollo/client';

const getProductsQuery = gql `
query {
    category {
      name
      products {
        id
        name
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