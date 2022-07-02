// This module is only used for logging messages in the console.
// i.e if we want to log something we need to load this module into the document or project or use/require this module.
const EventEmitter = require('events')
const url = 'http://logger.io/log'
class Logger extends EventEmitter {

    log(message) {
        // it requires the message you want to log
    
        // it sends an http request to this url
        // We use this imaginary end point internally to log our messages
        // and this might send the url or id of the logged message which we can use to access and retrive the message 
        console.log(message);
        // Raise or emit an Event
        this.emit('messageLogged',{message:'Yeah yeah logging wait..'})
    }
}

module.exports= Logger;