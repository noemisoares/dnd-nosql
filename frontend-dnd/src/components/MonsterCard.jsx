import { getMonsterIcon } from '../utils/getIconPath';

function MonsterCard({ monster }) {
  return (
    <div className="card">
      <img
        src={getMonsterIcon(monster)}
        alt={monster.type || 'monster'}
        className="card-icon"
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
