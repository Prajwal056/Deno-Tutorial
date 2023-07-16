// import { serve } from 'https://deno.land/std/http/server.ts';

// const server = serve({ port: 8000 });
// console.log('Server is running on http://localhost:8000');

// for await (const req of server) {
//   if (req.method === 'POST' && req.url === '/add') {
//     try {
//       const body = await req.json();
//       const { num1, num2 } = body;

//       if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         req.respond({ status: 400, body: JSON.stringify({ error: 'Invalid input. Both num1 and num2 should be numbers.' }) });
//       } else {
//         const sum = num1 + num2;
//         req.respond({ status: 200, body: JSON.stringify({ result: sum }) });
//       }
//     } catch (error) {
//       req.respond({ status: 500, body: JSON.stringify({ error: 'Internal Server Error' }) });
//     }
//   } else {
//     req.respond({ status: 404, body: JSON.stringify({ error: 'Not Found' }) });
//   }
// }
