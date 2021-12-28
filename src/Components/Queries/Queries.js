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
        attributes {
          name
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`

// const getPDP = gql`
// query {

// }`

export {getProductsQuery};