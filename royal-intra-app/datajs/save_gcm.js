function registerGCM() {

 //alert('calling push init');
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "765936451898",
				"vibrate": true,
				"sound": true,
				"clearNotifications": false
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);
			//alert(data.registrationId);
			

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

            /*var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');*/
			
			////////////database store registration //////////
			$("#GCM_ID").html('GCM ID...'+data.registrationId);
			var faculty_username = $.session.get('session_id');
			var dataString="regID="+data.registrationId+"&faculty_username="+faculty_username;
			var BaseURL = "http://swsinc.in/beta/aryanintra/phonegap/";
			$.ajax({
                    type: "POST",
                    url: BaseURL+"insert_gcm_reg_id.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#GCM_ID").html('Connecting...'+data.registrationId); },
                    success: function(dataINS){
                        if(dataINS=="ok")
                        { alert("Your mobile is registered, thank you."); }
                        else if(dataINS=="error")
                        {} 
						 else if(dataINS=="duplicate")
                        {}
                    }
                });
			
			///////////////////database input registration ////////
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
    
	
}