var button = document.getElementById("c");
var counter = 0 ;
button.onClick = function(){
counter=counter + 1;
var span = document.getElementById("c");
span.innerHTML = counter.toString();
};
