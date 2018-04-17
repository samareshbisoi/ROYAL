
	


 function sud_data() {
 
 
        //$("#insert").click(function(){
            var subject_id=$("#subject_id").val();
            var branch_id=$("#branch_id").val();
            var course_id=$("#course_id").val();
			var semester=$("#semester").val();
			var class_date=$("#class_date").val();
			var class_topic=$("#class_topic").val();
			var faculty_id=$("#faculty_id").val();
			
						
            var dataString="subject_id="+subject_id+"&branch_id="+branch_id+"&course_id="+course_id+"&semester="+semester+"&class_date="+class_date+"&faculty_id="+faculty_id+"&class_topic="+class_topic+"&mode=insert";
			//alert(BaseURL+"insert_class_plan.php?"+dataString);
            if($.trim(subject_id).length>0 & $.trim(course_id).length>0 & $.trim(branch_id).length>0 & $.trim(semester).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"insert_class_plan.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks ,we have saved the class plan");
                            $("#submit").val('submit');
							$("#class_date").val('') ;
							$("#class_topic").val('') ;
                        }
                        else if(data=="error")
                        {
                            alert("error");
							$("#submit").val('submit');
							$("#class_date").val('') ;
							$("#class_topic").val('') ;
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already submitted class plan for this class,hence we have updated the data ");
							$("#submit").val('submit');
							$("#class_date").val('') ;
							$("#class_topic").val('') ;
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
