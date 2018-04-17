

function fix_value(assign_faculty_sub_id,subject_id,branch_id,course_id,semester,faculty_id) { //alert(text);
	 $("#subject_id").val(subject_id);
	  $("#branch_id").val(branch_id);
	  $("#course_id").val(course_id);
	  $("#semester").val(semester);
	   $("#faculty_id").val(faculty_id);
	  $(".assign").css('color', 'blue');
	  $("#"+assign_faculty_sub_id).css('color', 'red');
}

function suggest_subjects() {
	var faculty_username = $.session.get('session_id');
	var url=BaseURL+"suggest_subjects.php?faculty_username="+faculty_username ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var Link=field.Link;
				
				
				str = str+ Link +'<br>';
	          
				
	        });
			
			 $("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		suggest_subjects();
		
	});