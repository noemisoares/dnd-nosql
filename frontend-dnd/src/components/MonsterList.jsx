import { useEffect, useState } from 'react';

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('/api/monsters')
      .then((res) => res.json())
      .then((data) => setMonsters(Array.isArray(data) ? data : data.results || data.monsters || []))
      .catch((err) => console.error('Erro ao buscar monstros:', err));
  }, []);

  return (
    <div>
      <h2>Monstros (apenas listagem para teste)</h2>
      <ul>
        {monsters.map((monster) => (
          <li key={monster._id || monster.index}>
            <strong>{monster.name}</strong>
            {monster.challenge_rating !== undefined ? ` — CR ${monster.challenge_rating}` : ''}
            {monster.type ? ` — ${monster.type}` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonsterList;
