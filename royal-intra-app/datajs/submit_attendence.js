
	


 function sud_data() {
 
 
        //$("#insert").click(function(){
            var subject_id=$("#subject_id").val();
            var branch_id=$("#branch_id").val();
            var course_id=$("#course_id").val();
			var semester=$("#semester").val();
			var class_date=$("#class_date").val();
			var stu_reg_ids=$("#stu_reg_ids").val();
			var faculty_id=$("#faculty_id").val();
			
						
            var dataString="subject_id="+subject_id+"&branch_id="+branch_id+"&course_id="+course_id+"&semester="+semester+"&class_date="+class_date+"&faculty_id="+faculty_id+"&stu_reg_ids="+stu_reg_ids+"&mode=insert";
			//alert(BaseURL+"insert_attendence.php?"+dataString);
            if($.trim(subject_id).length>0 & $.trim(course_id).length>0 & $.trim(branch_id).length>0 & $.trim(semester).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"insert_attendence.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks ,we have saved the attendence data");
                            $("#submit").val('submit');
							$("#class_date").val('') ;
							$("#stu_reg_ids").val('') ;
                        }
                        else if(data=="error")
                        {
                            alert("error");
							$("#submit").val('submit');
							$("#class_date").val('') ;
							$("#stu_reg_ids").val('') ;
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already submitted attendence for this class,hence we have updated the data ");
							$("#submit").val('submit');
							$("#class_date").val('') ;
							$("#stu_reg_ids").val('') ;
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
