import React from 'react';
import { ArrowUp, BookOpen, Heart } from 'lucide-react';
import { Season } from '../types';

interface FooterProps {
  onSeasonChange: (season: Season) => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSeasonChange, onOpenAbout }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <span className="footer-brand-name serif">Broto & Brasa</span>
            <p className="footer-tagline">
              Uma publicação gastronômica diária dedicada à cozinha cotidiana conectada com as estações e a terra brasileira.
            </p>
            <div className="footer-pillars-tag">
              <span>Duas receitas por dia · Almoço & Jantar</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title serif">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#receitas-do-dia">Receitas de Hoje</a></li>
              <li><a href="#ingredientes-da-estacao">Ingredientes da Safra</a></li>
              <li><a href="#arquivo-culinario">Diário da Cozinha</a></li>
              <li>
                <button className="footer-text-btn" onClick={onOpenAbout}>
                  Manifesto Editorial & Diretrizes
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-seasons-col">
            <h4 className="footer-nav-title serif">Ciclos no Brasil</h4>
            <ul className="footer-links">
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('outono')}>Outono (Mar – Jun)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('inverno')}>Inverno (Jun – Set)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('primavera')}>Primavera (Set – Dez)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('verao')}>Verão (Dez – Mar)</button></li>
            </ul>
          </div>

          <div className="footer-identity-col">
            <h4 className="footer-nav-title serif">Direção Visual</h4>
            <p className="footer-identity-desc">
              Paleta natural com Verde Oliva, Sálvia, Terracota, Creme e Grafite. Tipografia em DM Serif Display e Inter. Fotografias reais verificadas com licença comercial.
            </p>
            <div className="palette-dots">
              <span className="dot" style={{ backgroundColor: '#64765A' }} title="Verde Oliva"></span>
              <span className="dot" style={{ backgroundColor: '#A7AD8B' }} title="Sálvia"></span>
              <span className="dot" style={{ backgroundColor: '#C77B55' }} title="Terracota"></span>
              <span className="dot" style={{ backgroundColor: '#F1EBDD', border: '1px solid #ccc' }} title="Creme"></span>
              <span className="dot" style={{ backgroundColor: '#383A32' }} title="Grafite"></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Broto & Brasa. Todos os direitos reservados. Fotografias com autoria e licença creditadas nas imagens. Sem uso de IA generativa em imagens.
          </p>
          <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <span>Voltar ao topo</span>
            <ArrowUp size={15} style={{ marginLeft: 6 }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
