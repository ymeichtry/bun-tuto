import figlet from 'figlet'

// with figlet you can do some better stuff than chatgpt (if you yk, you yk)
// https://x.com/somewheresy/status/1765727226400493714

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const body = figlet.textSync("Hola! senior?")
        return new Response(body)
    }
})

console.log(`Listening on PORT http://localhost:${server.port}`)
