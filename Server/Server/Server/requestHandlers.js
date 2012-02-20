var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called");
    var content = "empty";
    exec("cmd dir", function(error, stdout, stderr) {
        if (typeof(stdout) == 'undefined') {
            content = stdout;
        } else {
            content = "No answer";
        }
    });

    return content;
}

function upload(){
	console.log("Request handler 'upload' was called");
	return "Hello upload";
}

exports.start = start;

exports.upload = upload;