//菜鸟教程
var http = require("http");
var url = require("url");
var querystring = require('querystring');
var util = require('util');

function start(route) {
  function onRequest(request, response) {
    var path = url.parse(request.url);
    var pathname = path.pathname;
    var query = path.query;
    var obj =  querystring.parse(query);


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('path: '+ util.inspect(path) + '\n');
    response.write('pathname: ' + pathname + '\n');
    response.write('query: ' + query + '\n');
    response.write('foo: ' + obj.foo + '\n');
    response.write('hello: ' + obj.hello + '\n');
    response.write('query.foo: ' + query.foo + '\n');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;


