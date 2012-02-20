var http = require("http");
var url = require("url");

function start(route, handleArray) {
	function onRequest(request, response) {
		console.log("A request was received");
		var pathName = url.parse(request.url).pathname;
		console.log("Request received for the pathName:" + pathName );
		
		var content = route(handleArray, pathName);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log("The server has started");	
}

exports.start = start;
