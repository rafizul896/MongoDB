const EventEmiter = require('events');
const myEmitter = new EventEmiter();

// listener
myEmitter.on('birthday', () => {
    console.log('Happy Good Day');
})

myEmitter.on('gift', (p) => {
    console.log(`I Will send a gift. And This gift name is ${p}.`)
})

myEmitter.on('birthday', () => {
    console.log('For Testing')
})

myEmitter.emit('birthday');
myEmitter.emit('gift', 'watch')
