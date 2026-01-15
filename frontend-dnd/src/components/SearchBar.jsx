function SearchBar({
  search,
  onSearchChange,
  spellSchool,
  onSpellSchoolChange,
  monsterType,
  onMonsterTypeChange,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Buscar magias ou monstros..."
        className="search-input"
      />

      <div className="search-filters">
        <select
          value={spellSchool}
          onChange={(e) => onSpellSchoolChange(e.target.value)}
        >
          <option value="all">Todas as escolas</option>
          <option value="abjuration">Abjuration</option>
          <option value="conjuration">Conjuration</option>
          <option value="divination">Divination</option>
          <option value="enchantment">Enchantment</option>
          <option value="evocation">Evocation</option>
          <option value="illusion">Illusion</option>
          <option value="necromancy">Necromancy</option>
          <option value="transmutation">Transmutation</option>
        </select>

        <select
          value={monsterType}
          onChange={(e) => onMonsterTypeChange(e.target.value)}
        >
          <option value="all">Todos os monstros</option>
          <option value="aberration">Aberration</option>
          <option value="beast">Beast</option>
          <option value="celestial">Celestial</option>
          <option value="construct">Construct</option>
          <option value="dragon">Dragon</option>
          <option value="elemental">Elemental</option>
          <option value="fey">Fey</option>
          <option value="fiend">Fiend</option>
          <option value="giant">Giant</option>
          <option value="humanoid">Humanoid</option>
          <option value="monstrosity">Monstrosity</option>
          <option value="ooze">Ooze</option>
          <option value="plant">Plant</option>
          <option value="undead">Undead</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
