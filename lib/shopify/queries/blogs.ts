
export const getArticlesQuery =`
  query getAllArticles {
    articles(first: 40) {
      edges {
        node {
          handle
          id
          image {
            src
            altText
          }
          title
          content
        }
      }
    }
  }
`;
  // node(id: "gid://shopify/Article/606157930774") {

    // node(handle: "hehe") {
    //   ... on Article {
    //     id
    //     title
    //     content
    //     image {
    //       src
    //       altText
    //     }
    //   }
    // }
export const getArticlesByIdQuery =`
query GetArticleById($blogHandle: String!,$articleHandle:String!) {
  blogByHandle(handle: $blogHandle) {
    articleByHandle(handle: $articleHandle) {
              id
              title
              contentHtml
                content
                publishedAt
                tags
                author {
                  firstName
                  lastName
                  email
                }
                image {
                src
                height
                width
                altText
              }
            }
          }

}

`;
// blogByHandle(handle: "news") {
// articleByHandle(handle: "adnan") {
//   id
//   title
//   content
//   image {
//     src
//     altText
//   }
// }
// }

export const getBlogsQuery = /* GraphQL */ `
  query getBlogs {
    blogs(first: 250) {
      edges {
        node {
          id
          title
          articles(first: 250) {
            edges {
              node {
                id
                title
                contentHtml
                content
                publishedAt
                author {
                  firstName
                  lastName
                  email
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getBlogsByid = `query getBlogById($blogId: ID!) {
  blog(id: $blogId) {
    id
    title
    articles(first: 10) {
      edges {
        node {
          id
          title
          contentHtml
        }
      }
    }
  }
}`

