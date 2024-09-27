import { Elysia } from "elysia";
import { plugin } from "./plugin";

// APPLICATION
const app = new Elysia().get("/", () => "Hello Elysia")

.use(plugin)
.state({
  id: 1,
  email: 'john@doe.com'
})
.decorate('getDate', () => Date.now())

// .get('/post/:id', ({ params }: { params: { id: string } }) => { return { id: id, title: 'learn Bun' } })
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'learn Bun'}})

.post('/post', ({body, set, store}) => {
  console.log(store)
  set.status = 201
  return body
})

.get('/track/*', () => {return 'track all'})
.get('/tracks', ({store, getDate}) => {
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
console.log(store)
console.log(getDate())
console.log(store['plugin-version'])

  return {
    "tracks": [
    'Money for nothing',
    'Do I wanna know',
    'Take me out',
    'New song'
  ]
}
});

//version
app.group('/user', app => app
  .post('/sing-in', () => "Sinin Route")
  .post('/sing-up', () => "Singup Route")
  .post('/profile', () => "Profile Route")
  .get('/:id', () => "User by id")
)

app.group('/v1', app => app
  .get('/', () => "Version 1")
  .group('/products', app => app
    .post('/', () => "Create Product")
    .get('/:id', () => "Get Product by id")
    .put('/:id', () => "Update Product by id")
    .delete('/:id', () => "Delete Product by id")
  )
)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
