var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
// app.use(function (req, res, next) {
//   console.log('Hello World');
//   next();
// });

// app.use('/user/:id', function(req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

// app.get('/user/:id', function (req, res, next) {
//   res.send('USER');
// });

// app.use('/user/:id',
//   function(req, res, next) {
//     console.log('Request URL:', req.originalUrl);
//     next();
//   },
//   function(req, res, next) {
//     console.log('Request Type:', req.method);
//     next();
//   }
// );

app.get('/user',
  // function(req, res, next) {
  //   if (req.params.id == 0) {
  //     next('route');
  //   }
  //   else {
  //     next();
  //   };
  // },
  // function(req, res, next) {
  //   console.log('ID:', req.params.id);
  //   next();
  // },
  function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
  }
)

// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something Broke!')
// });


app.listen(3000, function(){
  console.log('*****listening:3000*****');
});
