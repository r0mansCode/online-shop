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

const getProductByIdQuery = gql `
query GetProduct ($id: String!){
    product(id: $id) {
      id
      name
      brand
      category
      description
      gallery
      prices{
        currency
        amount
      }
      attributes {
        name
        items {
          displayValue
          value
          id
        }
      }
      inStock
    }
  }
`;



export {getProductsQuery, getProductByIdQuery};