var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 var app = express();
 app.use(morgan('combined'));
 
 var htmlCreateSignin = function (data){
    var title = data.title;
    var type = data.type;
    var htmlTemplate = `
        <HTML>
            <HEAD>
            <TITLE>${title}</TITLE>
            <link href="/ui/style.css" rel="stylesheet">
            </HEAD>
            <BODY>
                <DIV ALIGN = left><A HREF = "/">Home</A></DIV>
                <DIV CLASS = "center text-big bold">
                    ${type}
                </DIV>
                <DIV ALIGN = "middle">
                    <INPUT TYPE = "text" ID = "username" PLACEHOLDER = "username"/>
                    <INPUT TYPE = "password" ID = "password" PLACEHOLDER = "password"/>
                    <BUTTON ID = "submit">Submit</BUTTON>
                </DIV>
        
            </BODY>
        </HTML>
             `;
             return htmlTemplate;
};
var htmlCreateSignup = function (data){
  var title = data.title;
  var type = data.type;
  var htmlTemplate = `
  <HTML>
        <HEAD>
            <LINK HREF = "/ui/style.css" REL = "stylesheet">
            <TITLE>${title}</TITLE>
        <HEAD>
        <BODY>
            <DIV ALIGN = left><A HREF = "/">Home</A></DIV>
            <DIV CLASS = "center text-big bold">${type}</DIV>
            <DIV><h1>Personal Details</h1></DIV>
            <DIV>
                <H3>Name:</H3>
                <DIV>
                    <INPUT TYPE="text" PLACEHOLDER = "First Name"> 
                    <INPUT TYPE="text" PLACEHOLDER = "Middle Name">
                    <INPUT TYPE="text" PLACEHOLDER = "Last Name"> 
                </DIV>
            </DIV>
            <DIV>
                <H3>Birthday:</H3>
                <DIV>
                    <INPUT TYPE="number" PLACEHOLDER = "Year"> 
                    <INPUT TYPE="text" PLACEHOLDER = "Month">
                    <INPUT TYPE="text" PLACEHOLDER = "Day" > 
                </DIV>
            </DIV>
            <DIV>
                <H3>Choose your email id :</H3>
                
                    <INPUT TYPE="text" STYLE = "width:400px" PLACEHOLDER = "                                  
                                                  @nac.com" > 
                
            </DIV>
            <DIV>
                <H3>Select your password wisely:</H3>
                <INPUT TYPE="password" PLACEHOLDER="Password">
                <BR><BR>
                <INPUT TYPE="password" PLACEHOLDER="Confirm Password">
            </DIV>
            
        </BODY>
  </HTML>
  `;
  return htmlTemplate;
};

var signup = {
    title: 'NAC Logon',
    type: 'NAC LOGON'
};

var signin = {
    title: 'NAC Signin',
    type: 'NAC SIGNIN'
};

app.get ('/signup', function (req,res){
   res.send(htmlCreateSignup(signup)); 
});

app.get('/signin', function (req,res){
    res.send(htmlCreateSignin(signin));
});

 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
 
 app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
 });
 
 app.get('/ui/main.js', function (req,res){
     res.sendFile(path.join(__dirname, 'ui', 'main.js'));
 });
 
 
 
 var port = 80; // Use 8080 for local development because you might already have apache running on 80
 app.listen(80, function () {
   console.log(`IMAD course app listening on port ${port}!`);
 });