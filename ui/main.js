alert ("Hi,  Nagesh. The main.js is responding.");

var name = document.getElementById('name');
var submit = document.getElementById('submit_btn');
var nameValue = name.value;
submit.onclick = function (){
	var list ='';
	var name = ['name1', 'name2', 'name3'];
	for (var i=0; i<3; i++){
		list += '<li>' + name[i] + '</li>
	};document.getElementById('nameList').innetHTML = list;
};
