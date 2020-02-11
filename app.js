const express = require("express");
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphqlSchema = require('./schema');
const graphqlResolvers = require('./resolvers');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to graphql server!</h1>');
});

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}));

const user = process.env.ME;
const pass = process.env.PASS;
const db = process.env.DATABASE;
const port = process.env.PORT;
console.log(user,pass);
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-peize.mongodb.net/${db}retryWrites=true&w=majority`, { useNewUrlParser: true })
// mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })
// mongoose.connect(`mongodb+srv://Pradnya:Pradnya123@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true }) 
// mongoose.connect(`mongodb://127.0.0.1:27017`,{ useNewUrlParser: true })
.then(() => {
    // console.log(`Server is running on port 6000`);
    console.log(`Server is running on port ${port}`);
    app.listen(port);

    // app.listen(6000);
}).catch(err => {
    console.log(err);
});