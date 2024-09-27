import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")
// .get('/post/:id', ({ params }: { params: { id: string } }) => { return { id: id, title: 'learn Bun' } })
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'learn Bun'}})
.post('/post', ({body}) => {return body})
.get('/track/*', () => {return 'track all'})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
