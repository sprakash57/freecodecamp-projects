const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Allow cross-origin requests
app.use(cors());

//one supercharge route to rule them all.
//This middleware must contain a Schema to work.
//Express doesn't understand graphql. epress-graphql package help it to pass the instructoins.
/**
 * Schema will tell our app about data and how our graph will look.
 * Ultimate goal of creating graphQL server is to allow our queries to
 * jump into the graph into different poin to retrieve our data.
 *
 * We need a way to programatically create this graph like schema and then pass it into graphqlHTTP function.
 * So that express-graphql knows exactly how to deal with the data.
 *
 * Once Scehma is taken care of you must provide the query string.
 */

mongoose.connect(
  "mongodb://sprakash57:smart5712@ds113443.mlab.com:13443/graphql-db"
);
mongoose.connection.once("open", () => {
  console.log("connected to Database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server is starting at Port: 4000");
});
