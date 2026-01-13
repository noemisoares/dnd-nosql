import { useEffect, useState } from 'react';
import SpellCard from './SpellCard';

function SpellList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch('/api/spells')
      .then(res => res.json())
      .then(data =>
        setSpells(Array.isArray(data) ? data : data.results || data.spells || [])
      )
      .catch(err => console.error('Erro ao buscar magias:', err));
  }, []);

  return (
    <section>
      <h2>Magias</h2>

      {spells.map(spell => (
        <SpellCard
          key={spell._id || spell.index}
          spell={spell}
        />
      ))}
    </section>
  );
}

export default SpellList;