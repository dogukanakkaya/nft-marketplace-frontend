import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const app = new Application();

app.use(async context => {
    await context.send({
        root: `${Deno.cwd()}/dist`,
        index: "index.html",
    });
});

await app.listen({ port: 8000 });