export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Backend NoSQL D&D</title>
        <style>
          body {
            background: #0f0f0f;
            color: #e6d28a;
            font-family: system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .box {
            text-align: center;
            padding: 2rem 3rem;
            border: 1px solid #3a3a3a;
            border-radius: 12px;
            background: linear-gradient(180deg, #161616, #0f0f0f);
          }
          h1 {
            margin-bottom: 0.5rem;
          }
          p {
            color: #aaa;
            margin-bottom: 1.5rem;
          }
          a {
            display: inline-block;
            margin: 0.5rem;
            padding: 0.6rem 1.2rem;
            border-radius: 999px;
            border: 1px solid #d4af37;
            color: #d4af37;
            text-decoration: none;
          }
          a:hover {
            background: rgba(212,175,55,0.1);
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Backend NoSQL de D&D</h1>
          <p>API de Magias e Monstros</p>

          <a href="/api/spells"> Feitiços</a>
          <a href="/api/monsters"> Monstros</a>
        </div>
      </body>
    </html>
  `);
}
