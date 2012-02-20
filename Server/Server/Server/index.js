var server = require("./server");
var route = require("./route");
var requestHandlers = require("./requestHandlers");

var handleArray = {};

handleArray["/"] 	   = requestHandlers.start;
handleArray["/start"]  = requestHandlers.start;
handleArray["/upload"] = requestHandlers.upload;

server.start(route.route, handleArray);
