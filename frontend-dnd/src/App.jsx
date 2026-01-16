import { useState } from "react";
import "./App.css";
import SpellList from "./components/SpellList";
import MonsterList from "./components/MonsterList";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [spellSchool, setSpellSchool] = useState("all");
  const [monsterType, setMonsterType] = useState("all");
  const [contentView, setContentView] = useState("all");

  return (
    <div className="app-root">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Manual do Aventureiro em D&D</h1>
          <p className="hero-sub">
            Grimório de Feitiços e Bestiário de Criaturas do universo Dungeons &
            Dragons
          </p>
        </div>
      </header>

      <main className="container">
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          spellSchool={spellSchool}
          onSpellSchoolChange={setSpellSchool}
          monsterType={monsterType}
          onMonsterTypeChange={setMonsterType}
          contentView={contentView}
          onContentViewChange={setContentView}
        />

        <div className="lists">
          {(contentView === "all" || contentView === "spells") && (
            <SpellList search={search} school={spellSchool} />
          )}

          {(contentView === "all" || contentView === "monsters") && (
            <MonsterList search={search} type={monsterType} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
