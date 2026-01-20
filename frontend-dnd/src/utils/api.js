const API_URL = import.meta.env.VITE_API_URL;

export async function fetchMonsters() {
  const res = await fetch(`${API_URL}/api/monsters`);
  if (!res.ok) {
    throw new Error("Erro ao buscar monsters");
  }
  return res.json();
}

export async function fetchSpells() {
  const res = await fetch(`${API_URL}/api/spells`);
  if (!res.ok) {
    throw new Error("Erro ao buscar spells");
  }
  return res.json();
}
