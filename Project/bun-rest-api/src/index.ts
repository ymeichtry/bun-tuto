import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")
// .get('/post/:id', ({ params }: { params: { id: string } }) => { return { id: id, title: 'learn Bun' } })
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'learn Bun'}})

.post('/post', ({body, set}) => {
  set.status = 201
  return body
})

.get('/track/*', () => {return 'track all'})
.get('/tracks', () => {
//   return new Response(JSON.stringify({
//     "tracks": [
//       'Money for nothing',
//       'Do I wanna know',
//       'Take me out'
//     ]
//   }), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// })
  return {
    "tracks": [
    'Money for nothing',
    'Do I wanna know',
    'Take me out',
    'New song'
  ]
}
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
