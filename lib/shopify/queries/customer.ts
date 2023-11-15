export const getLoginCustomerDataQuery = `
query getLoginCustomerDataQuery($accessToken: String!) {
    customer(customerAccessToken: $accessToken) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }`;
