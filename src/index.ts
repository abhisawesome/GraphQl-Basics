import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { schemaGenerator, resolver } from './lib';

const app = express();
app.use(bodyParser.json())
const PORT = 5000;


app.get('/test', (req, res) => {
    return res.send({ status: true })
})

app.use('/graphql', graphqlHTTP(() => {
    return {
        schema: schemaGenerator(),
        rootValue: resolver,
        graphiql: true
    }
}))

app.listen(PORT, () => {
    console.log(`App Listening in ${PORT}`)
})




