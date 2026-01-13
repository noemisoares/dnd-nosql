import { useEffect, useState } from 'react';

function SpellList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch('/api/spells')
      .then((res) => res.json())
      .then((data) => setSpells(Array.isArray(data) ? data : data.results || data.spells || []))
      .catch((err) => console.error('Erro ao buscar magias:', err));
  }, []);

  return (
    <div>
      <h2>Magias (apenas listagem para teste)</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell._id || spell.index}>
            <strong>{spell.name}</strong>{spell.level !== undefined ? ` — Nível ${spell.level}` : ''}
            {spell.school?.name ? ` — ${spell.school.name}` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpellList;
