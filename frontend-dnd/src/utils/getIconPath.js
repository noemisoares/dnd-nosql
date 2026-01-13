export function getSpellIcon(spell) {
  const school = spell.school?.name?.toLowerCase();
  return school
    ? `/spells/${school}.png`
    : '/default.png';
}

export function getMonsterIcon(monster) {
  const type = monster.type?.toLowerCase();
  return type
    ? `/monsters/${type}.png`
    : '/default.png';
}
