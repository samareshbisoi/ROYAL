//alert($.session.get('session_id'));

if($.session.get('session_id') === undefined) {
	$(location).attr('href', '../index.html'); //alert("session not set");
}

if($.session.get('session_id') != "logout") {
var uname = $.session.get('session_id');
$("#username").html(uname);
} else {
$(location).attr('href', '../index.html'); //alert("session not set");
}