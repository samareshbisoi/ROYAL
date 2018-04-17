
function view_all_attendence() {
	var student_reg_no = $.session.get('session_id');
	var url=BaseURL+"list_attendence.php?student_reg_no="+student_reg_no ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var total_class_present=field.total_class_present;
				//var subject_name=field.subject_name;
				
				
				$("#listview").append('<li class="table_row"><div class="table_section">Total no. of class present</div><div class="table_section">'+total_class_present+'</div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_attendence();
		
	});