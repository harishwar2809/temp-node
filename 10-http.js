import http from "http"


const server=http.createServer((req,res)=>{
if (req.url === "/") {
  return res.end("Welcome to home page");
}

if (req.url === "/about") {
  return res.end("Welcome to about page");
}

res.end("<h1>Oops! Wrong page.</h1>");})

server.listen(5000);