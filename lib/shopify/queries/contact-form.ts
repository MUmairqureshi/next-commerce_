
export const getFormQuery = `
  query getForm {
    {
        shop {
          contactForm {
            id
            fields(first: 10) {
              edges {
                node {
                  id
                  label
                  name
                  type
                }
              }
            }
          }
        }
    //   }  
  }
`;