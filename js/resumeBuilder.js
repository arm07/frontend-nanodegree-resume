/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
//$("#main").append("Rashmitha Mary Allam");


var formattedName,formattedRole,formattedContact,formattedEmail;

var name="Rashmitha Mary Allam"
formattedName=HTMLheaderName.replace("%data%",name);
$("#header").append(formattedName);

var role="Seeking Full Stack Developer position"
formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedRole);

/*
var contact="3129375543"
var contactRef="Contact Me At:"

formattedContact2=HTMLcontactGeneric.replace("%data%",contactRef);
formattedContact=HTMLcontactGeneric.replace("%contact%",contact);

var s=formattedContact2+formattedContact;
$("#header").append(s);
*/

var contactObjs={"%contact%":"Contact Me At:","%data%":"3129375543"}
formattedContact=HTMLcontactGeneric.replace(/%\w+%/g,function(all){
	return contactObjs[all]||all;
});

$("#header").append(formattedContact);

var email="rallam2@uic.edu"
formattedEmail= HTMLemail.replace("%data%",email);
$("#header").append(formattedEmail);

var github="arm07"
formattedGit=HTMLgithub.replace("%data%",github);
$("#header").append(formattedGit);





