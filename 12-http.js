// const http = require('http');

// const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//   res.write('Welcome to the Home Page')
//   }
//   if(req.url === '/about'){
//     res.write('Here is our short history')
//   }
//   res.end(`
//   <h1> Oops </h1>
//   <p> can't seem to fiund the page </p>
//   <a href="/"> back home </a>`)
// })

// server.listen(5000)

const http = require('http')

const server = http.createServer((req,res)=>{
if (req.url === '/') {
  res.end('Welcome to our home page')
} else if (req.url === '/about') {
  res.end('Here is our short history')
} else {
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
}
})

server.listen(5000)