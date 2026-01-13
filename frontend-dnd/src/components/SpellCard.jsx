import { getSpellIcon } from '../utils/getIconPath';

function SpellCard({ spell }) {
  return (
    <div className="card">
      <img
        src={getSpellIcon(spell)}
        alt={spell.school?.name || 'spell'}
        className="card-icon"
      />

      <div className="card-info">
        <h3>{spell.name}</h3>

        <p className="card-sub">
          {spell.level !== undefined ? `Level ${spell.level}` : '—'}
          {spell.school?.name ? ` • ${spell.school.name}` : ''}
        </p>
      </div>
    </div>
  );
}

export default SpellCard;
