
function view_all_class_plan() {
	var student_reg_no = $.session.get('session_id');
	var url=BaseURL+"list_class_plan.php?student_reg_no="+student_reg_no ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var class_topic=field.class_topic;
				var class_date=field.class_date;
				var subject_name=field.subject_name;
				var class_plan_id=field.class_plan_id;
				
				
				$("#listview").append('<li><div class="feat_small_icon"><img src="images/icons/black/electronics.png" alt="" title="" /></div><div class="feat_small_details"><h4><a href="#">'+subject_name+' &nbsp; '+class_date+'</a></h4><a href="#">'+class_topic+'</a></div></li> ');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_class_plan();
		
	});