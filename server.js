var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 var app = express();
 app.use(morgan('combined'));
 
 
 var articleOne = {
     title: 'Article-One',
     date: 'september 1 1999',
     content: `<p>I was born at this date.<br> Iam 17 years yet.</p>`
 };

var HTMLtemplate = function (data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var createTemplate = `
        <html>
            <head> <title> ${title}</title> 
                <link href = "/ui/style.css" rel = "stylesheet"/>
                <meta name = "viewport" content = "width-device-width,initial-scale-1"/>
            </head>
            <body>
            <a href="/" class = "aStyle"  > Home</a>
                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/17951946_1377862472300488_5565792766461539071_n.jpg?oh=b0c5e9b456d428a9fe6a343e7f174053&oe=5A0A1A22" class = "img-medium"/>
                <hr>
                <div align = "right">${date}</div>
                <hr>
                <div align = "center">${content}</div>
            </body>
        </html>`;
    return createTemplate;    
};


 
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
 
 app.get('/article-one', function (req,res){
    res.send(HTMLtemplate(articleOne)); 
 });
 
 
 var port = 80; // Use 8080 for local development because you might already have apache running on 80
 app.listen(80, function () {
   console.log(`IMAD course app listening on port ${port}!`);
 });