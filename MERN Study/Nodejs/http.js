//use the createServer() method to create a HTTP server
var http=require('http');

//create a server object

http.createServer(function(req,res){
    res.write("Hello World"); //write a response to the client
    res.end();//end the response
}).listen(8080); //the serverobject listens on port 8080

//then type 'http://localhost:8080/' in the browser
//then it will show hello world