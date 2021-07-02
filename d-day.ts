import { Application, Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";

console.log(String(new Date()))

const SECOND = 1e3;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function dayOfYear(date: Date): number {
  
    const yearStart = new Date(date);
  
    yearStart.setFullYear(date.getFullYear(), 0, 0);
    const diff = date.getTime() -
      yearStart.getTime() +
      (yearStart.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  
    return Math.floor(diff / DAY);
  }

const app = new Application();

const router = new Router();

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/',(context) =>{
    context.response.body = "하연이 "+String(dayOfYear(new Date()))+"일 동안 놀리는중!";
})

console.log('Server is listening on port 8080')
await app.listen({ port: 8080 });
