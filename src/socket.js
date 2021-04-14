const s = require('socket.io')
const io = s(3000, {
    cors: {
        origin: 'http://localhost:3001',
        methods: [ 'GET', 'POST' ]
    }
})

io.on("connection", socket => {
    socket.send("Hello!")
    socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([ 4, 3, 2, 1 ]))

    socket.on("message", data => console.log(data))
    socket.on("salutations", (...args) => console.log(...args))

    socket.on("user message", data => console.log(`Someone just said: "${data}"`))
})
