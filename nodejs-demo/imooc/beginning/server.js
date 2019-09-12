const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	//给createServer传入一个匿名的回调函数，两个参数分别是请求体和响应体
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //浏览器解释为纯文本
  //以** 结束
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});