
function view_all_notice() {
	var faculty_username = $.session.get('session_id');
	var url=BaseURL+"list_view_notice.php" ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var notice_title=field.notice_title;
				var notice_desc=field.notice_desc;
				
				
				$("#listview").append('<li class="table_row"><div class="table_section">'+notice_title+'</div><div class="table_section">'+notice_desc+'</div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_notice();
		
	});