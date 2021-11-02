import { gql } from '@apollo/client';

const getProductsQuery = gql `
query {
    category {
      name
      products {
        id
        name
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