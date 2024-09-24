var http=require('http');

http.createServer(function(req,res){
res.writeHead(200,{'content-Type':'text/html'});
res.write('<h3>Hello world!</h3>');
res.write('<html><head><style> .hi{color: blue;}</style> </head><body> <h3 class="hi">Inline styling here!</h3> <h3 class="hi">Inline styling here!</h3></body></html>')
res.end();
}).listen(8080);