import { Application, Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { dayOfYear } from 'https://deno.land/std/datetime/mod.ts'


const app = new Application();

const router = new Router();

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/',(context) =>{
    context.response.body = "하연이 "+String(dayOfYear(new Date(Date.now())))+"일 동안 놀리는중!";
})

console.log('Server is listening on port 8080')
await app.listen({ port: 8080 });
