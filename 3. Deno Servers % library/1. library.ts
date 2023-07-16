// uuid module
import { v1 } from "https://deno.land/std@0.194.0/uuid/mod.ts";
const { generate } = v1;
const myUUID = generate();
console.log(myUUID);

// // fs module
import { copy } from "https://deno.land/std@0.194.0/fs/copy.ts";
copy("./foo", "./bar"); // returns a promise

// const books = [
//   { title: 'the way of kings', author: 'brandon sanderson' },
//   { title: 'name of the wind', author: 'patrick rothfuss' },
// ];

// await writeJson('books.json', books, { spaces: 2 });
// console.log('created books.json');






