
// Deno fetch Api
const res = await fetch("https://swapi.dev/api/films/1/")
const data = await res.json()
console.log(data)

// to run this file:
// deno run --allow-net denoFetch.ts


// all permission list do not repeat
// deno run --allow-read --allow-write --allow-net --allow-env --allow-run --allow-plugin --allow-hrtime denoFetch.ts
// explain permission list
// https://deno.land/manual/getting_started/permissions


