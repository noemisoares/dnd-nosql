import { useState } from 'react';
import './App.css';
import SpellList from './components/SpellList';
import MonsterList from './components/MonsterList';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [spellSchool, setSpellSchool] = useState('all');
  const [monsterType, setMonsterType] = useState('all');

  return (
    <div className="app-root">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Manual do Aventureiro em D&D</h1>
          <p className="hero-sub">
            Grimório de Feitiços e Magias e Bestiário de Monstros e Criaturas do universo de Dungeons & Dragons
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
        />

        <div className="lists">
          <SpellList search={search} school={spellSchool} />
          <MonsterList search={search} type={monsterType} />
        </div>

      </main>
    </div>
  );
}

export default App;
