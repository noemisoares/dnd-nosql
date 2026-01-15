import { useEffect, useState } from "react";
import SpellCard from "./SpellCard";
import "./SpellList.css";

function SpellList({ search, school }) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("/api/spells")
      .then((res) => res.json())
      .then((data) =>
        setSpells(
          Array.isArray(data) ? data : data.results || data.spells || []
        )
      )
      .catch((err) => console.error("Erro ao buscar magias:", err));
  }, []);

  const filteredSpells = spells.filter((spell) => {
    const matchesName = spell.name.toLowerCase().includes(search.toLowerCase());

    const matchesSchool =
      school === "all" || spell.school?.name?.toLowerCase() === school;

    return matchesName && matchesSchool;
  });

  return (
    <section className="list-section spell-list">
      <h2>Magias</h2>

      <div className="list-grid">
        {filteredSpells.map((spell) => (
          <SpellCard key={spell._id || spell.index} spell={spell} />
        ))}
      </div>
    </section>
  );
}

export default SpellList;
