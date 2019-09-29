var express =  require('express')
var app = express(); 

var PORT = 3000; 
app.use(express.static(__dirname + '/public'))
app.listen(PORT, () => {
    console.log('Listening at 3000')
})
