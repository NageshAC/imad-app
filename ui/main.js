var button = document.getElementById("counter");
var counter = 0;
button.onClick = function(){
   // var reqt = new XMLHttpRequest();
    //reqt.onreadystatechange=function(){
      //  if (reqt.readySate ===XMLHttpRequest.DONE){
        //    if (reqt.status===200){
          //      var counter = reqt.responseText;
                counter +=1;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            //}
       // }
   // };
   // reqt.open('GET', 'http://acnagesh481.imad.hasura-app.io/counter/',true)
   // reqt.send(null);

};
