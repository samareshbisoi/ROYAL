function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}

// <li><a href="student-syllabus.html" class="close-panel"><img src="images/icons/red/features.png" alt="" title="" /><span>Student Syllabus</span></a></li>

$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="student-dashboard.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="student-attendance.html" class="close-panel"><img src="images/icons/red/users.png" alt="" title="" /><span>Attendance</span></a></li><li><a href="student-assignment.html" class="close-panel"><img src="images/icons/red/categories.png" alt="" title="" /><span>Assignment</span></a></li><li><a href="student-noticeboard.html" class="close-panel"><img src="images/icons/red/blog.png" alt="" title="" /><span>Notice Board</span></a></li><li><a href="student-syllabus.html" class="close-panel"><img src="images/icons/red/features.png" alt="" title="" /><span>Student Syllabus</span></a></li><li><a href="student-marksheet.html" class="close-panel"><img src="images/icons/red/menu.png" alt="" title="" /><span>My Result</span></a></li><li><a href="student-classplan.html" class="close-panel"><img src="images/icons/red/tabs.png" alt="" title="" /><span>Class Plan</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/shop.png" alt="" title="" /><span>Complain</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/toggle.png" alt="" title="" /><span>Leave Application</span></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/logout.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);
		
	});