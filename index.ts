import figlet from 'figlet'

// with figlet you can do some better stuff than chatgpt (if you yk, you yk)
// https://x.com/somewheresy/status/1765727226400493714

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url)
        if(url.pathname == '/'){
            const body = figlet.textSync("Hola! senior?")
            return new Response(body)
        }
        
        if(url.pathname === '/about'){
            return new Response("About me!")
        }

        if(url.pathname === '/contact'){
            return new Response("Contact me!")
        }

        return new Response('Not Found', {status: 404})
    }
})

console.log(`Listening on PORT http://localhost:${server.port}`)
