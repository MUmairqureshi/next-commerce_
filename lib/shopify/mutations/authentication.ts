export const CreateCustomerMutation = `
    mutation CreateCustomer($firstName: String!,$lastName: String!,$email: String!,$password: String!,$acceptsMarketing: Boolean) {
      customerCreate(input: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        password: $password,
        acceptsMarketing:$acceptsMarketing
      }) {
        customer {
          id
          firstName
          lastName
          email
        }
      }
    }
  `;

export const SignInWithEmailAndPasswordMutataion=`
  mutation SignInWithEmailAndPassword(
    $email: String!, 
    $password: String!,
) {
    customerAccessTokenCreate(input: { 
        email: $email, 
        password: $password,
    }) {
        customerAccessToken {
            accessToken
            expiresAt
        }
        
        customerUserErrors {
            code
            message
        }
    }
    customer(email=$email) {
      id
      firstName
      lastName
      email
    }
}`