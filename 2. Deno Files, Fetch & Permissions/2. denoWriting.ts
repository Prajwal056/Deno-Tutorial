
// 2. Deno Wrinting Files
const encoder = new TextEncoder()

const text = encoder.encode("Hello again Deno!")

await Deno.writeFile("writing.txt", text)


// to run this file:
// deno run --allow-write denoWriting.ts