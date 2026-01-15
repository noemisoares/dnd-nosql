import { useEffect, useState } from 'react';
import MonsterCard from './MonsterCard';
import './MonsterList.css';

function MonsterList({ search, type }) {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("/api/monsters")
      .then((res) => res.json())
      .then((data) =>
        setMonsters(
          Array.isArray(data) ? data : data.results || data.monsters || []
        )
      )
      .catch((err) => console.error("Erro ao buscar monstros:", err));
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    const matchesName = monster.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = type === "all" || monster.type?.toLowerCase() === type;

    return matchesName && matchesType;
  });

  return (
    <section className="list-section monster-list">
      <h2>Monstros</h2>

      <div className="list-grid">
        {filteredMonsters.map((monster) => (
          <MonsterCard key={monster._id || monster.index} monster={monster} />
        ))}
      </div>
    </section>
  );
}

export default MonsterList;