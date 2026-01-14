import { getMonsterIcon } from '../utils/getIconPath';

function MonsterCard({ monster }) {
  const typeClass = monster.type?.toLowerCase();

  return (
    <div className="card">
      <div
        className={`card-icon monster-icon ${typeClass}`}
        style={{
          maskImage: `url(${getMonsterIcon(monster)})`,
          WebkitMaskImage: `url(${getMonsterIcon(monster)})`,
        }}
        aria-label={monster.type || 'monster'}
      />

      <div className="card-info">
        <h3>{monster.name}</h3>

        <p className="card-sub">
          {monster.size ? `${monster.size} • ` : ''}
          {monster.type}
          {monster.challenge_rating !== undefined
            ? ` • CR ${monster.challenge_rating}`
            : ''}
        </p>
      </div>
    </div>
  );
}

export default MonsterCard;
