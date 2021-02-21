import { GraphQLObjectType, GraphQLString, GraphQLSchema, printSchema, GraphQLInt, GraphQLList } from 'graphql';

export default () => {

    const Author = new GraphQLObjectType({
        name: 'Author',
        fields: {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            }
        }
    })
    const rootQuery = new GraphQLObjectType({
        name: 'Query',
        fields: {
            getAllAuthors: {
                type: new GraphQLList(Author)
            },
            getAuthorWithId: {
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                type: Author
            }
        }
    })

    const schema = new GraphQLSchema({
        query: rootQuery
    })
    console.log(printSchema(schema))
    return schema;
}