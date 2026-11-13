import type { Season } from '../types';

interface FooterProps {
  onSeasonChange: (season: Season) => void;
  onOpenAbout: () => void;
}

export function Footer({ onSeasonChange, onOpenAbout }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-rule" aria-hidden="true">* * *</div>
      <div className="footer-container">
        <div className="footer-main-grid">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo.webp`}
              alt=""
              className="brand-seal"
            />
            <p className="footer-brand-name serif">Broto & Brasa</p>
            <p className="footer-tagline">
              Duas panelas por dia. O que o feirante trouxe de mais fresco de manhã e o que o apetite pede ao cair da tarde.
            </p>
          </div>
          <div>
            <p className="footer-nav-title">Navegar</p>
            <ul className="footer-links">
              <li><a href="#receitas-do-dia">Hoje</a></li>
              <li><a href="#ingredientes-da-estacao">Safra</a></li>
              <li><a href="#arquivo-culinario">Diário</a></li>
              <li>
                <button type="button" className="footer-text-btn" onClick={onOpenAbout}>
                  Origem
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-nav-title">Estações</p>
            <ul className="footer-links">
              <li><button type="button" className="footer-text-btn" onClick={() => onSeasonChange('outono')}>Outono</button></li>
              <li><button type="button" className="footer-text-btn" onClick={() => onSeasonChange('inverno')}>Inverno</button></li>
              <li><button type="button" className="footer-text-btn" onClick={() => onSeasonChange('primavera')}>Primavera</button></li>
              <li><button type="button" className="footer-text-btn" onClick={() => onSeasonChange('verao')}>Verão</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Broto & Brasa</p>
          <p>
            Desenvolvido por{' '}
            <a href="https://hefezzia.com.br" target="_blank" rel="noopener noreferrer">
              Hefezzia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
