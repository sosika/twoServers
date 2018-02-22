// Using the previous example as a guide, 



// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet

// Require/import the HTTP module
var http = require("http");

// One that listens on port 7000 and one that listens on port 7500.
var PORT1 = 7000;
var PORT2 = 7500;

// The one listening on port 7000 will always tell the user something good about themselves.
function glassHalfFull(request, response) {
	response.end("I've accomplished a lot today!");
}

// The one listening on 7500 will always tell the user something bad about themselves.
function glassHalfEmpty(request, response) {
	response.end("Today sucks!!");
}
// create two web servers.
var server1 = http.createServer(glassHalfFull);
var server2 = http.createServer(glassHalfEmpty);

server1.listen(PORT1, function() {

  console.log("Server listening on: http://localhost:" + PORT1);

});

server2.listen(PORT2, function() {

  console.log("Server listening on: http://localhost:" + PORT2);

});

