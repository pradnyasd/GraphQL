const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
var mongoose = require("mongoose");

// let options = {useNewUrlParser: true};
// let uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-edesh.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);
console.log(process.env.MONGO_USER);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-peize.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    // mongoose.connect(`mongodb+srv://pradnya:Pradnya123@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true } ).then(() => {
    // mongoose.connect(`mongodb+srv://akshata:wagheAk@1997@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true } ).then(() => {
    // mongoose.connect(`mongodb+srv://Pradnya:Pradnya123@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true } ).then(() => {
    // mongodb+srv://pradnya:<password>@cluster0-peize.mongodb.net/test?retryWrites=true&w=majority   /${process.env.MONGO_DB}?

    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
