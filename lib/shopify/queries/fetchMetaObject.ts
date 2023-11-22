export const fetchMetaObjectQuery=`
query fetchMetaObjectQuery($handle: String!,$type:String!)
{
    metaobject(handle: {type: $type, handle: $handle}) {
        fields {
            key
            value
            reference {
              ... on MediaImage {
                id
                image {
                  originalSrc
                }
              }
            }
          }
        }
  }
`

