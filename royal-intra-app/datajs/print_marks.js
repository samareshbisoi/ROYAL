
function view_all_marks() {
	var student_reg_no = $.session.get('session_id');
	var url=BaseURL+"list_marks.php?student_reg_no="+student_reg_no ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var subject_name=field.subject_name;
				var chapter_name=field.chapter_name;
				var obtained_marks=field.obtained_marks;
				var exam_date=field.exam_date;
				var test_type=field.test_type;
				var total_marks=field.total_marks;
				
				$("#listview").append('<li class="swipeout"><div class="swipeout-content item-content"><div class="post_entry"><div class="post_thumb"><img src="images/class _assignment.jpg" alt="" title="" /></div><div class="post_details"><div class="post_category"><a href="#">'+subject_name+' &nbsp; '+test_type+'</a></div><h2><a href="#">'+chapter_name+' &nbsp; Exam Dt. '+exam_date+'</a></h2></div><div class="post_swipe"><b>'+obtained_marks+'<br />'+total_marks+'</b></div></div></div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_marks();
		
	});