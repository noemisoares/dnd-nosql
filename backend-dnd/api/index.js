module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Backend NoSQL D&D</title>
        <style>
          body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            background: radial-gradient(circle at top, #1b1b1b, #0b0b0b);
            color: #e6d8a3;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          .card {
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid #3a2a12;
            border-radius: 16px;
            padding: 2.5rem 3rem;
            max-width: 520px;
            text-align: center;
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.15);
          }

          h1 {
            margin-bottom: 0.5rem;
            font-size: 1.8rem;
          }

          p {
            opacity: 0.85;
            margin-bottom: 2rem;
          }

          .buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          a {
            text-decoration: none;
          }

          button {
            padding: 10px 20px;
            border-radius: 999px;
            background: linear-gradient(135deg, #3a2a12, #1a1206);
            border: 1px solid #d4af37;
            color: #f5e7b2;
            cursor: pointer;
            font-size: 0.95rem;
            transition: all 0.2s ease;
          }

          button:hover {
            transform: translateY(-1px);
            box-shadow: 0 0 14px rgba(212,175,55,0.35);
          }

          footer {
            margin-top: 2rem;
            font-size: 0.8rem;
            opacity: 0.6;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Backend NoSQL de D&D</h1>
          <p>
            API de Feitiços e Monstros baseada no universo de
            <strong>Dungeons & Dragons</strong>.
          </p>

          <div class="buttons">
            <a href="/api/monsters">
              <button>Monstros</button>
            </a>
            <a href="/api/spells">
              <button>Feitiços</button>
            </a>
          </div>

          <footer>
            MongoDB • Node.js • Vercel
          </footer>
        </div>
      </body>
    </html>
  `);
};
