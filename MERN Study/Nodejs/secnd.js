var http=require('http');

http.createServer(function(req,res){
res.writeHead(200,{'content-Type':'text/html'});
res.write('<h3>Biodata</h3>');
res.write('<html><head><style> sub.{color: blue;} main.{color: red;}</style> </head><body><h3 class="main">Name</h3><p class="sub">Noof Abdul Raheem A P<p><br></body></html>')
res.end();
}).listen(8080);