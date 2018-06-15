const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const { db } = require('./models')

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
console.log('shy')

})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
db.authenticate().
then(() => {
  console.log('connected to the database');
})


