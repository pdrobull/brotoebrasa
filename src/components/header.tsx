import { useEffect, useRef, useState } from 'react';
import type { Season } from '../types';
import { capitalizePtDate } from '../seasons';

interface HeaderProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenAbout: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const seasons: { id: Season; label: string }[] = [
  { id: 'outono', label: 'Outono' },
  { id: 'inverno', label: 'Inverno' },
  { id: 'primavera', label: 'Primavera' },
  { id: 'verao', label: 'Verão' },
];

function NotebookIcon() {
  return (
    <svg
      className="notebook-icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="6.5" y="3" width="13" height="18" rx="1.2" />
      <path d="M6.5 7H4M6.5 11H4M6.5 15H4" />
      <path d="M10 8h6.5M10 12h6.5M10 16h4" />
    </svg>
  );
}

function SeasonCompass({
  currentSeason,
  onSeasonChange,
}: {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
}) {
  return (
    <div className="season-compass" role="tablist" aria-label="Estação">
      {seasons.map((season, index) => (
        <span key={season.id} className="season-compass-item">
          {index > 0 && <span className="season-dash" aria-hidden="true">—</span>}
          <button
            type="button"
            role="tab"
            aria-selected={currentSeason === season.id}
            className={`season-link ${currentSeason === season.id ? 'is-active' : ''}`}
            onClick={() => onSeasonChange(season.id)}
          >
            {season.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header({
  currentSeason,
  onSeasonChange,
  savedCount,
  onOpenSaved,
  onOpenAbout,
  searchTerm,
  onSearchChange,
}: HeaderProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const compactSearchRef = useRef<HTMLInputElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const today = capitalizePtDate(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
  );

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCompact(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        (compact ? compactSearchRef : searchRef).current?.focus();
      }
      if (e.key === 'Escape') {
        const active = document.activeElement;
        if (active === searchRef.current || active === compactSearchRef.current) {
          onSearchChange('');
          (active as HTMLInputElement).blur();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [compact, onSearchChange]);

  const renderNotebook = () => (
    <button
      type="button"
      className="notebook-btn"
      onClick={onOpenSaved}
      aria-label={savedCount > 0 ? `Caderno, ${savedCount} receitas` : 'Caderno'}
    >
      <NotebookIcon />
      {savedCount > 0 && <span className="notebook-count">{savedCount}</span>}
    </button>
  );

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <p className="masthead-dateline">
            Edição diária · {today} · Safras do Brasil
          </p>

          <div className="masthead">
            <a href={import.meta.env.BASE_URL} className="brand-logo">
              <span className="brand-name">Broto & Brasa</span>
            </a>
            <p className="brand-mark">Duas panelas por dia</p>
          </div>

          <div className="header-bar">
            <nav className="nav-menu" aria-label="Principal">
              <a href="#receitas-do-dia" className="nav-link">Hoje</a>
              <a href="#ingredientes-da-estacao" className="nav-link">Safra</a>
              <a href="#arquivo-culinario" className="nav-link">Diário</a>
              <button type="button" className="nav-link nav-link-btn" onClick={onOpenAbout}>
                Origem
              </button>
            </nav>

            <SeasonCompass currentSeason={currentSeason} onSeasonChange={onSeasonChange} />

            <div className="header-actions">
              <input
                ref={searchRef}
                type="search"
                placeholder="Buscar raiz, peixe, época…"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
                aria-label="Buscar receitas"
              />
              {renderNotebook()}
            </div>
          </div>
        </div>
      </header>

      <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />

      <div className={`compact-bar${compact ? ' is-visible' : ''}`} aria-hidden={!compact}>
        <div className="compact-bar-inner">
          <a href={import.meta.env.BASE_URL} className="brand-logo-compact">
            <span className="brand-name-compact">Broto & Brasa</span>
          </a>
          <SeasonCompass currentSeason={currentSeason} onSeasonChange={onSeasonChange} />
          <div className="header-actions">
            <input
              ref={compactSearchRef}
              type="search"
              placeholder="Buscar raiz, peixe, época…"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
              aria-label="Buscar receitas"
              tabIndex={compact ? 0 : -1}
            />
            {renderNotebook()}
          </div>
        </div>
      </div>
    </>
  );
}
