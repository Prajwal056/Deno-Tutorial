
// 1. Deno For Reading Files
// to run this file:
// deno run --allow-read denoReading.ts

const decoder = new TextDecoder("utf-8")

const data = await Deno.readFile("readme.txt")
console.log("Step 1: ",decoder.decode(data))

const File = await Deno.readTextFile("readme.txt")
console.log("Step 2: ",File)