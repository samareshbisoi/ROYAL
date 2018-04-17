function submit_data() {
 
 
        //$("#insert").click(function(){
            var uni_reg_no=$("#uni_reg_no").val();
			var email=$("#email").val();
            var password=$("#password").val();
			var GCM_ID = $("#GCM_ID").val();
			
					
            var dataString="uni_reg_no="+uni_reg_no+"&password="+password+"&email="+email+"&gcm_id="+GCM_ID+"&mode=register";
			//alert("http://swsinc.in/FBO/phonegap/insert_content_review.php?"+dataString);
            if($.trim(uni_reg_no).length>0 & $.trim(password).length>0 & $.trim(email).length>0 )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"student_register.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#register").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Thanks for registering with us.');
                            $("#register").val('submit');
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
							$(location).attr('href', 'student-login.html');
                        }
                        else if(data=="error")
                        {
                            alert("Invalid Data...Please try again");
							$("#register").val('submit');
							$("#username").val('') ;
							$("#password").val('') ;
                        } 
						 else if(data=="no")
                        {
                            alert("Sorry Registration No. does not exists in our database.");
							$("#register").val('submit');
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
                        }
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }