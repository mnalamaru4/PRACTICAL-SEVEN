require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://Mahidhar:9989@cluster0.iu84sbl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  projectcollection = client.db().collection("projects");
  if (!err) {
    console.log("MongoDB Connected");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});
module.exports = client;
