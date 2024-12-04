// src/routes/home.Routes.js

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server is running</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        }
        .container {
        max-width: 400px; 
        margin: 20px;
        background-color: #ffffff; 
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        text-align: center;
        }
        h1 {
        color: #333;
        margin-bottom: 20px; 
        }
        p {
        color: #666; 
        margin-bottom: 0; 
        }
        a {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        color: #ffffff;
        background-color: #007bff;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color 0.3s, transform 0.3s;
        }
        a:hover {
        background-color: #0056b3;
        transform: scale(1.05);
        }
        a:focus {
        outline: 2px solid #0056b3;
        outline-offset: 4px;
        }
        @keyframes blink {
        0% { opacity: 0; }
        50% { opacity: 1; } 
        100% { opacity: 0; }
        }
        .blinking-text {
        animation: blink 2s infinite; 
        font-size: 24px; 
        font-weight: bold; 
        color: #007bff;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Server is running</h1>
        <p class="blinking-text">...</p>
        <a href="http://localhost:3000/api-docs">Swagger Docs Local</a>
        <a href="">Swagger Docs Render</a>
    </div>
    </body>
    </html>
  `;
  res.send(htmlResponse);
});

export default router;
