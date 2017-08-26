var button = document.getElementById("co");
button.onClick = function(){
    var reqt = new XMLHttpRequest();
    reqt.onreadystatechange=function(){
        if (reqt.readySate ===XMLHttpRequest.DONE){
            if (reqt.status===200){
                var counter = reqt.responseText;
                var span = document.getElementById("c");
                span.innerHTML = counter.toString();
            }
        }
    };
    reqt.open('GET', 'http://acnagesh481.imad.hasura-app.io/counter/',true)
    reqt.send(null);

};
