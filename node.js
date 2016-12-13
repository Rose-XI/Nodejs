var http=require("http");/*引入模块*/
http.createServer(function (request ,response) {
	response.writeHead(200,{'content-Type':'text/plain'});
	if(request.url!=="/favicon.ico"){
          funl(response);
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	
	response.end('Helloworld');}
	// 发送响应数据 "Hello World"

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
// 终端打印如下信息
function funl(res){//本地函数
	console.log("funl");
    res.write("hello,我是funl");

}