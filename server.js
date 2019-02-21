const app = require('./app');
const port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log(server.address());
  console.log(`Server listening on localhost:${port}`);
});
