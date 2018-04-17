
function view_all_subjects() {
	var faculty_username = $.session.get('session_id');
	var url=BaseURL+"list_view_subject.php?faculty_username="+faculty_username ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var subject_name=field.subject_name;
				var branch_name=field.branch_name;
				var course_name=field.course_name;
				var semester=field.semester;
				var session=field.session;
				
				
				$("#listview").append('<li><div class="feat_small_icon"><img src="images/icons/black/blog.png" alt="" title="" /></div><div class="feat_small_details"><h4><a href="#">'+subject_name+'</a></h4><a href="#"> <b>Branch</b> - '+branch_name+', <b>Course</b> - '+course_name+' , <b>Semester</b> - '+semester+' , <b>Session</b> - '+session+'.</a></div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_subjects();
		
	});