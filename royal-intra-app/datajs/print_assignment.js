
function view_all_assignment() {
	var student_reg_no = $.session.get('session_id');
	var url=BaseURL+"list_assignment.php?student_reg_no="+student_reg_no ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var a_title=field.a_title;
				var a_desc=field.a_desc;
				var subject_name=field.subject_name;
				var assign_id=field.assign_id;
				
				
				$("#listview").append('<li class="swipeout"><div class="swipeout-content item-content"><div class="post_entry"><div class="post_thumb"><img src="images/class _assignment.jpg" alt="" title="" /></div><div class="post_details"><div class="post_category"><a href="#">'+subject_name+'</a></div><h2><a href="#">'+a_title+'</a></h2></div><div class="post_swipe"><img src="images/swipe_more.png" alt="" title="" /></div></div></div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_assignment();
		
	});