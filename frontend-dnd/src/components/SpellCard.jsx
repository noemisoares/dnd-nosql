import { getSpellIcon } from '../utils/getIconPath';

function SpellCard({ spell }) {
  const schoolClass = spell.school?.name?.toLowerCase();

  return (
    <div className="card">
      <div
        className={`card-icon spell-icon ${schoolClass}`}
        style={{
          maskImage: `url(${getSpellIcon(spell)})`,
          WebkitMaskImage: `url(${getSpellIcon(spell)})`,
        }}
        aria-label={spell.school?.name || 'spell'}
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