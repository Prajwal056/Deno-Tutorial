// http module (server)
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";
serve((_req) => new Response("Hello, world, nice to meet you"),{
    port: 8080,
    hostname: "localhost",
    onListen({ port, hostname }) {
      console.log(`Server started at http://${hostname}:${port}`);
      console.log(`Press Ctrl+D to stop.`);
    },
});