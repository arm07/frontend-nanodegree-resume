/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
//$("#main").append("Rashmitha Mary Allam");


/*
var contact="3129375543"
var contactRef="Contact Me At:"

formattedContact2=HTMLcontactGeneric.replace("%data%",contactRef);
formattedContact=HTMLcontactGeneric.replace("%contact%",contact);

var s=formattedContact2+formattedContact;
$("#header").append(s);
*/


var formattedName,formattedRole,formattedContact,formattedEmail,formattedGit,formattedImg;

/*
formattedName=HTMLheaderName.replace("%data%",name);
$("#header").append(formattedName);
*/

var name="Rashmitha Mary Allam"
var role="Seeking Full Stack Developer position"
var email="rallam2@uic.edu"
var github="arm07"
var mylocation="CHICAGO";
var myImg='https://static.wixstatic.com/media/fdfec4_264256140bd142dcb75e21d00d64be20~mv2.jpg/v1/crop/x_0,y_262,w_866,h_866/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01/fdfec4_264256140bd142dcb75e21d00d64be20~mv2.jpg';

/*
var bio={
	"name":name,
	"role":role,
	"contactInfo":contactObjs,
	"pictureURL":myImg
};
*/
var bio= {
	"name":name,
	"role":role,
	"contacts":{"mobile":"3129375543",
				"email":email,
				"github":github,
				"location":mylocation},
	"skills":["Persistence","Positive attitude","Always Yearning To Learn"],
	"biopic":"https://static.wixstatic.com/media/fdfec4_264256140bd142dcb75e21d00d64be20~mv2.jpg/v1/crop/x_0,y_262,w_866,h_866/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01/fdfec4_264256140bd142dcb75e21d00d64be20~mv2.jpg"
	};

formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);


formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);

var contactObjs={"%contact%":"Contact Me At:","%data%":"3129375543"}
formattedContact=HTMLcontactGeneric.replace(/%\w+%/g,function(all){
	return contactObjs[all]||all;
});
$("#header").append(formattedContact);


formattedEmail= HTMLemail.replace("%data%",email);
$("#header").append(formattedEmail);

formattedGit=HTMLgithub.replace("%data%",github);
$("#header").append(formattedGit);

formattedLocation=HTMLlocation.replace("%data%",mylocation);
$('#header').append(formattedLocation);

formattedImg=HTMLbioPic.replace("%data%",bio.biopic);
//$('#header').prepend(formattedImg);

if(bio.skills.length>0){

$("#header").append(HTMLskillsStart);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
		
}

/*
var workObj={	
	"employer":"TechProlite Solutions",
	"pastJob":"Website Design Assistant",
	"yearsWorked":"7 months",
	"city":"Hyderabad,India"
}
*/

var work = {
	"jobs": [{
			"employer": "TechProlite Solutions",
			"title": "Website Design Assistant",
			"dates": "Jan2015-July2015",
			"city": "Hyderabad,India",
			"description": "Assisted in building and troubleshooting the website by gathering requirements and • Updated website contents by modifying images using JQuery to reduce page loading time • Used Web developer tools to solve capability issues with various kinds of browsers and devices. Performed and participated in website analysis, design, implementation, troubleshooting and testing phases by creating responsive websites using .NET, PHP, MySQL, HTML, JavaScript, WordPress and CSS content management system. Responsible for checking the website for broken links or corrupted code and assisted in developing new pages for the company website. http://www.techprolite.com/"
		},

		{
			"employer": "UI Health",
			"title": "Data Coordinator",
			"dates": "June2016-Feb2016",
			"city": "Chicago",
			"description": " Performed database transfers by collecting information from Online Portal or Cerner Scheduler by running queries on patients records and adding new records of appointments through Patient Access Management. Verified records of appointments to identify any data abnormalities for quality assurance that increased Insurance company’s profits due to lowered held claims. Answered queries from patients regarding insurance policies by verifying confidential information of patients in accordance with HIPPA and responsible for maintaining accurate records of patients by utilizing best customer service practices. "
		}
	]
};


$("#workExperience").append(HTMLworkStart);

for(i in work.jobs){
	
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
	var formattedworkLocation=HTMLworkLocation.replace("%data%",work.jobs[i].city);
	var formattedworkDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
	
	$(".work-entry").append(formattedEmployer);
	$(".work-entry").append(formattedWorkTitle);
	$(".work-entry").append(formattedworkDates);
	$(".work-entry").append(formattedworkLocation);
	$(".work-entry").append(formattedworkDescription);
	
	}

var projects={
	
	"projectN":[
	{"title":"MY APPOINTMENT",
	"Dates":"January 2017 – May 2017",
	"description":"Designed and developed Android application to make appointments to UIHealth that can used by the patients of UIHealth. Communicated with the staff of UIHealth face to face to gather requirements, understand the existing system and get the suggestions for the expected application.  Responsible for the front-end development, few backend application logic screens and database connectivity using SQLite"},
	
	{"title":"RIDE SHARING APP",
	"Dates":"January 2017 – May 2017",
	"description":"The main aim of this project was to combine individual trips to shared trips to reduce the total distance travelled by taxis and to reduce the number of trips. To achieve this goal, k-means clustering and trip matching techniques with passenger count and delay time constraints were used. Distance saved and number of trips saved before and after ridesharing was evaluated to identify the savings"},
	
	{"title":"SMARTPHONE ISSUES QUICK FIX",
	"Dates":"January 2016",
	"description":"Developed a multithreaded Java application with a GUI using Jess. It uses Jess’s reflection capabilities to build a SWING based graphical interface that could be interacted directly from a Jess Script Console. It is meant to guide smart-phone users through the process of diagnosing smart-phone problems they face in day-to-day life and suggest a solution."},
	
	{"title":"SMART CAR EXPERT SYSTEM",
	"Dates":"February 2016",
	"description":"Developed fuzzy control expert system using Java Beans, Swings and Fuzzy Jess. It can be used for regulating temperature in a car to maintain an optimum  temperature in the car. It is based on external temperature by taking inputs from the sensors that  are used to measure the temperature in the car."}
	]
};


$("#projects").append(HTMLprojectStart);

var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

for(i in projects.projectN){
	
	var formattedprojectTitle=HTMLprojectTitle.replace("%data%",projects.projectN[i].title);
	var formattedprojectDates=HTMLprojectDates.replace("%data%",projects.projectN[i].Dates);
	var formattedprojectDescription=HTMLprojectDescription.replace("%data%",projects.projectN[i].description);
	
	$(".project-entry").append(formattedprojectTitle);
	$(".project-entry").append(formattedprojectDates);
	$(".project-entry").append(formattedprojectDescription);
	
}

var education={
	"schools":[
	{
		"name":"UIC",
		"city":"CHICAGO",
		"degree":"Masters",
		"major":"CS",
		"dates":"2015-2017"
	},
	{
		"name":"SNIST",
		"city":"Hyderabad",
		"degree":"Bachelors",
		"major":"CS",
		"dates":"2011-2015"
	}
	],
	
	"onlineCourses":[
	{
	"title":"Python",
	"school":"coursera",
	"dates":"Aug2016"
	},
	
	{
	"title":"Java",
	"school":"Oracle Certification",
	"dates":"August2015"
	}
	]
}


$("#education").append(HTMLschoolStart);

for(i in education.schools){
	
	var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[i].name);
	var formattedschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
	var formattedschoolDates=HTMLschoolDates.replace("%data%",education.schools[i].dates);
	var formattedschoolLocation=HTMLschoolLocation.replace("%data%",education.schools[i].city);
	var formattedschoolMajor=HTMLschoolMajor.replace("%data%",education.schools[i].major);
	
	$(".education-entry").append(formattedschoolName);
	$(".education-entry").append(formattedschoolDegree);
	$(".education-entry").append(formattedschoolDates);
	$(".education-entry").append(formattedschoolLocation);
	$(".education-entry").append(formattedschoolMajor);
	
}
	
/*
var educationObj={
	"nameOfLastSchool":"University of Illinois, Chicago",
	"yearsAttended":"2 years",
	"school's city":"Chicago"
}


var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",workObj.employer);
$(".work-entry:first").append(formattedWorkEmployer);


var formattedWorkTitle=HTMLworkTitle.replace("%data%",workObj.pastJob);
$(".work-entry").append(formattedWorkTitle);

*/

/*



*/
