import { useEffect, useState } from 'react';
import MonsterCard from './MonsterCard';

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('/api/monsters')
      .then(res => res.json())
      .then(data =>
        setMonsters(Array.isArray(data) ? data : data.results || data.monsters || [])
      )
      .catch(err => console.error('Erro ao buscar monstros:', err));
  }, []);

  return (
    <section>
      <h2>Monstros</h2>

      {monsters.map(monster => (
        <MonsterCard
          key={monster._id || monster.index}
          monster={monster}
        />
      ))}
    </section>
  );
}

export default MonsterList;
