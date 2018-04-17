
	


 function sud_data() {
 
 
        //$("#insert").click(function(){
            var subject_id=$("#subject_id").val();
            var branch_id=$("#branch_id").val();
            var course_id=$("#course_id").val();
			var semester=$("#semester").val();
			var a_desc=$("#a_desc").val();
			var a_title=$("#a_title").val();
			var faculty_id=$("#faculty_id").val();
			
						
            var dataString="subject_id="+subject_id+"&branch_id="+branch_id+"&course_id="+course_id+"&semester="+semester+"&a_desc="+a_desc+"&faculty_id="+faculty_id+"&a_title="+a_title+"&mode=insert";
			//alert(BaseURL+"insert_attendence.php?"+dataString);
            if($.trim(subject_id).length>0 & $.trim(course_id).length>0 & $.trim(branch_id).length>0 & $.trim(semester).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"insert_assignment.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks ,we have saved the assignment data");
                            $("#submit").val('submit');
							$("#a_desc").val('') ;
							$("#a_title").val('') ;
                        }
                        else if(data=="error")
                        {
                            alert("error");
							$("#submit").val('submit');
							$("#a_desc").val('') ;
							$("#a_title").val('') ;
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already submitted attendence for this class,hence we have updated the data ");
							$("#submit").val('submit');
							$("#a_desc").val('') ;
							$("#a_title").val('') ;
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
