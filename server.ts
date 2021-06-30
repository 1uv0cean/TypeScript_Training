import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import router from "./routes.ts"


const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())


console.log('Server is listening on port 8080')
await app.listen({ port: 8080 });
