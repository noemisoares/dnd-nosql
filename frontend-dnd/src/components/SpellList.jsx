import { useEffect, useState } from "react";
import SpellCard from "./SpellCard";
import { fetchSpells } from "../utils/api";
import "./SpellList.css";

function SpellList({ search, school }) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchSpells()
      .then((data) =>
        setSpells(
          Array.isArray(data) ? data : data.results || data.spells || []
        )
      )
      .catch(console.error);
  }, []);

  console.log("SPELLS STATE:", spells);

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