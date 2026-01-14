export function getSpellIcon(spell) {
  const school = spell.school?.name
    ?.toLowerCase()
    ?.replace(/\s+/g, '');

  return school
    ? `/spells/${school}.svg`
    : '/default.svg';
}

export function getMonsterIcon(monster) {
  const type = monster.type
    ?.toLowerCase()
    ?.replace(/\s+/g, '');

  return type
    ? `/monsters/${type}.svg`
    : '/default.svg';
}