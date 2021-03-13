const http= require('http')
const port=3000
const html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- Own CSS -->
    <link rel="stylesheet" href="app.css">
    <title>Homepage</title>
</head>
<body>
    <div class="container mt-4 shadow p-3 mb-5 bg-white rounded">
        <div class="row">
            <div class="col col-sm-12">
                <h1 class="text-center">Welcome to my homepage</h1>
                <br>
                <img src="img/welcome.jpg" id="picture" width="500px" height="380px">
            </div>
        </div>
    </div>
    <script src="app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`;
const js=`console.log("Its working")`;
const css=`
html {
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background: rgb(244,168,200);
  background: -moz-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4a8c8",endColorstr="#006df6",GradientType=1);
}

h1 {
  font-family: 'Oswald', sans-serif;
}

.container {
  background: #fff;
  border-radius: 10px;
}

hr {
  margin-left: 0;
  width: 80px;
  background: #000;
}`;

const server = http. createServer();
server.on('request', (req,res)=>{
  switch (req.url){
    case '/':
  res.writeHeader (200, {'Content-Type', 'text/html'});
  res.end(html);
   case '/app.css':
    res.writeHeader (200, {'Content-Type', 'text/css'});
    res.end(css);
    case '/app.js':
      res.writeHeader (200, {'Content-Type', 'text/js'});
      res.end(js);
server.listen(PORT,()=>{
  console.log(`listening...${port}`)
});






const http= require('http')
const port=3000
const html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- Own CSS -->
    <link rel="stylesheet" href="app.css">
    <title>About us</title>
    </a>
</head>
<body>
    <div class="container mt-4 shadow p-3 mb-5 bg-white rounded">
        <div class="row">
            <div class="col col-sm-12">
                <h1 class="text-center">About us</h1>
                <br>
                <img src="img/about.jpg" id="picture" width="500px" height="380px">
            </div>
        </div>
    </div>
    <script src="app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`;
const js=`console.log("Its working")`;
const css=`
html {
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background: rgb(244,168,200);
  background: -moz-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4a8c8",endColorstr="#006df6",GradientType=1);
}

h1 {
  font-family: 'Oswald', sans-serif;
}

.container {
  background: #fff;
  border-radius: 10px;
}

hr {
  margin-left: 0;
  width: 80px;
  background: #000;
}`;

const http= require('http')
const port=3000
const html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- Own CSS -->
    <link rel="stylesheet" href="style.css">
    <title>404|Not found</title>
</head>
<body>
    <div class="container mt-4 shadow p-3 mb-5 bg-white rounded">
        <div class="row">
            <div class="col col-sm-12">
                <h1 class="text-center">NOT FOUND</h1>
                <br>
                <img src="img/cry.jpg" id="picture" width="500px" height="380px">
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`;
const js=`console.log("Its working")`;
const css=`
html {
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background: rgb(244,168,200);
  background: -moz-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  background: linear-gradient(90deg, rgba(244,168,200,1) 0%, rgba(0,109,246,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4a8c8",endColorstr="#006df6",GradientType=1);
}

h1 {
  font-family: 'Oswald', sans-serif;
}

.container {
  background: #fff;
  border-radius: 10px;
}

hr {
  margin-left: 0;
  width: 80px;
  background: #000;
}`;

const server = http. createServer();
server.on('request', (req,res)=>{
  switch (req.url){
    case '/':
  res.writeHeader (200, {'Content-Type', 'text/html'});
  res.end(html);
   case '/app.css':
    res.writeHeader (200, {'Content-Type', 'text/css'});
    res.end(css);
    case '/app.js':
      res.writeHeader (200, {'Content-Type', 'text/js'});
      res.end(js);
server.listen(PORT,()=>{
  console.log(`listening...${port}`)
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- Own CSS -->
    <link rel="stylesheet" href="style.css">
    <title>About us</title>
    </a>
</head>
<body>
    <div class="container mt-4 shadow p-3 mb-5 bg-white rounded">
        <div class="row">
            <div class="col col-sm-12">
                <h1 class="text-center">About us</h1>
                <br>
                <img src="img/about.jpg" id="picture" width="500px" height="380px">
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>
