import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

console.log("http://localhost:8080/");

app.get("/", () => {
    return "Welocom to Deno!";
    })

app.get("/hello", () => {
    return "Hello, Abc!";
  })

app.start({ port: 8080 });