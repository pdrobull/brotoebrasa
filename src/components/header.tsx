import React, { useState } from 'react';
import { Search, Bookmark, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Season } from '../types';

interface HeaderProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenAbout: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSeason,
  onSeasonChange,
  savedCount,
  onOpenSaved,
  onOpenAbout,
  searchTerm,
  onSearchChange,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const seasonNames: Record<Season, string> = {
    outono: 'Outono',
    inverno: 'Inverno',
    primavera: 'Primavera',
    verao: 'Verão',
  };

  return (
    <header className="site-header">
      <div className="header-top-bar">
        <div className="header-container top-bar-content">
          <span className="editorial-eyebrow">
            Duas receitas por dia · Almoço e Jantar no ritmo das estações brasileiras
          </span>
          <div className="top-bar-actions">
            <span className="season-indicator">
              Estação no Sudeste / Sul: <strong>{seasonNames[currentSeason]}</strong>
            </span>
            <button className="top-bar-link" onClick={onOpenAbout}>
              <BookOpen size={13} style={{ marginRight: 4 }} />
              Manifesto & Identidade
            </button>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-container main-nav-content">
          <div className="brand-group">
            <a href="/" className="brand-logo">
              <span className="brand-symbol">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3C14 3 6 8.5 6 15C6 19.4183 9.58172 23 14 23C18.4183 23 22 19.4183 22 15C22 8.5 14 3 14 3Z" stroke="#64765A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10V22" stroke="#64765A" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 14C11.5 13 9 14.5 9 14.5" stroke="#A7AD8B" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 17C16.5 16 19 17.5 19 17.5" stroke="#C77B55" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <div className="brand-text">
                <span className="brand-name">Broto & Brasa</span>
                <span className="brand-tagline">Cozinha editorial sazonal brasileira</span>
              </div>
            </a>
          </div>

          <nav className="nav-menu">
            <a href="#receitas-do-dia" className="nav-link active">Hoje</a>
            <a href="#ingredientes-da-estacao" className="nav-link">Ingredientes</a>
            <a href="#arquivo-culinario" className="nav-link">Diário da Cozinha</a>
            
            <div className="season-selector-pill">
              <Compass size={14} className="selector-icon" />
              <select
                aria-label="Selecione a estação do ano"
                value={currentSeason}
                onChange={(e) => onSeasonChange(e.target.value as Season)}
                className="season-dropdown"
              >
                <option value="outono">Outono brasileiro</option>
                <option value="inverno">Inverno brasileiro</option>
                <option value="primavera">Primavera brasileira</option>
                <option value="verao">Verão brasileiro</option>
              </select>
            </div>
          </nav>

          <div className="header-actions">
            <div className={`search-container ${searchOpen ? 'open' : ''}`}>
              <button 
                className="search-toggle-btn"
                aria-label="Buscar receitas ou ingredientes"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={18} />
              </button>
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Buscar mandioca, cabotiá, moqueca..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              )}
            </div>

            <button 
              className="saved-recipes-btn" 
              onClick={onOpenSaved}
              aria-label="Ver receitas salvas"
            >
              <Bookmark size={18} />
              <span className="saved-label">Salvas</span>
              {savedCount > 0 && <span className="saved-badge">{savedCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
