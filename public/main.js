/* functions for general use */
function getURLParameters(whichParam)
{
	var pageURL = window.location.search.substring(1);
	var pageURLVariables = pageURL.split('&');
	for(var i = 0; i < pageURLVariables.length; i++){
		var parameterName = pageURLVariables[i].split('=');
		if (parameterName[0] == whichParam) {
		return parameterName[1];
	    }
    }
}
var username = getURLParameters('username');
if ('undefined' == typeof username || username) {
	username = 'Anonymous_' +Math.random();
}

$('#messages').append('<h4>' +getURLParameters('username')+'</h4>');

/*Connect to the Socket Server 
var socket = io.connect();
socket.on('log', function(array){
	console.log.apply(console,array);
});*/