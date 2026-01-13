import { useEffect, useState } from 'react';
import SpellCard from './SpellCard';
import './SpellList.css';

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
    <section className="list-section spell-list">
      <h2>Magias</h2>

      <div className="list-grid">
        {spells.map(spell => (
        <SpellCard
          key={spell._id || spell.index}
          spell={spell}
        />
      ))}
      </div>
    </section>
  );
}

export default SpellList;