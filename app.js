var express = require('express'),
    cors = require('cors'),
    path = require('path'),
    fs = require('fs'),
    port = process.env.PORT || 9000,
    app = express(),
    root = 'dist';

if(process.argv[2] === 'debug'){
    root = 'app';
}

app.use(express.compress());
app.options('/features', cors());
app.get('/features', function(req, res){
   res.sendfile(path.join(__dirname, root, 'static', 'ie-status.json'));
});

app.get('/:id', function(req, res){
   res.sendfile(path.join(__dirname, root, 'index.html'));
});

//app.use(express.basicAuth('admin','IE11Rocks!'));
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, root)));

app.listen(port);

