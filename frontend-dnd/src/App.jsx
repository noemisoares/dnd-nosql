import './App.css';
import SpellList from './components/SpellList';
import MonsterList from './components/MonsterList';

function App() {
  return (
    <div className="app-root">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Frontend D&D NoSQL</h1>
          <p className="hero-sub">Uma interface temática inspirada em D&D</p>
        </div>
      </header>

      <main className="container">
        <div className="lists">
          <SpellList />
          <MonsterList />
        </div>
      </main>
    </div>
  );
}

export default App;
