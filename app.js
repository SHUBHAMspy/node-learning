const path = require('path')
const os = require('os')
const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello!! User')
        res.end()
    }

    if (req.url === '/api/movies') {
        res.write(JSON.stringify(['avengers','hulk','pk']))
        res.end()
    }
})

// If this module or document requires to log something to the console it requires log module
const Logger = require('./logger')
const logger = new Logger();

var zaputil = require('zaputil-lib')
var result  = zaputil.add(2,3)
var difference = zaputil.subtract(5,3)
var product = zaputil.multiply(5,10)
var divide = zaputil.divide(10,2)

const message = "Say Hello!! to NODE World "

const pathObj = path.parse(__filename)

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

//var files = fs.readdirSync('./')

fs.readdir('./',function(err,files) {
    if(err) console.log(`Error:${err}`);
    else console.log(`Result:${files}`);
})


//Register the eventListener for listening to the raised or emitted event
logger.on('messageLogged',(e) => console.log('Status:',e.message))



// I am feeling to log a message to console so i need to use logger
logger.log(message) 

// I want to make connection or fetch or access something online or from a remote site
server.listen(5000)
console.log('Listening on port 5000...')


console.log(pathObj);
console.log(`TotalMemory: ${totalMemory}`);
console.log(`FreeMemory: ${freeMemory}`);
console.log("Sum:",result);
console.log("Difference:",difference);
console.log("Multiply:",product);
console.log("Divide:",divide);

console.log(module);


