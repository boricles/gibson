function route(handleRequest, pathName){
	
	if( typeof(handleRequest[pathName]) == 'function'){
		return handleRequest[pathName]();
	}else{
		return "404 not found";
	}
}

exports.route = route;