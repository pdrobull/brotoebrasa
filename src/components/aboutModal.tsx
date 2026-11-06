import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel about-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <span className="modal-eyebrow">Manifesto Editorial</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-content about-content">
          <h2 className="about-title serif">Cozinhar com o que o Brasil colhe hoje</h2>
          
          <p className="about-lead">
            <strong>Broto & Brasa</strong> é uma publicação gastronômica diária dedicada a incentivar a culinária cotidiana brasileira conectada à estação do ano e à disponibilidade de alimentos frescos do nosso solo.
          </p>

          <div className="about-section-block">
            <h3 className="about-subtitle serif">Nossos Pilares</h3>
            <ul className="about-pillars-list">
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Duas receitas diárias:</strong> Uma para o almoço e outra para o jantar, eliminando a fadiga de escolha com curadoria ponderada.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Sazonalidade real:</strong> Respeitamos os calendários de safra do território nacional, prestigiando a agricultura familiar e orgânica.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Identidade Editorial:</strong> Tratamos a culinária como patrimônio afetivo e cultural, e não como catálogo desordenado.</span>
              </li>
            </ul>
          </div>

          <div className="about-section-block policy-highlight">
            <div className="policy-header">
              <ShieldAlert size={18} style={{ marginRight: 8, color: 'var(--color-terracotta)' }} />
              <h3 className="about-subtitle serif" style={{ marginBottom: 0 }}>Diretriz Obrigatória de Imagens</h3>
            </div>
            <p className="policy-desc">
              <strong>É expressamente proibido gerar imagens por inteligência artificial.</strong> Todas as fotografias do projeto são imagens reais de preparações gastronômicas verdadeiras, identificadas com pesquisa rigorosa, licença comercial confirmada e créditos transparentes aos seus respectivos fotógrafos.
            </p>
          </div>

          <div className="about-section-block">
            <h3 className="about-subtitle serif">Paleta & Tipografia do Projeto</h3>
            <div className="palette-showcase">
              <div className="color-chip" style={{ backgroundColor: '#64765A', color: '#fff' }}>Verde Oliva #64765A</div>
              <div className="color-chip" style={{ backgroundColor: '#A7AD8B', color: '#383A32' }}>Sálvia #A7AD8B</div>
              <div className="color-chip" style={{ backgroundColor: '#C77B55', color: '#fff' }}>Terracota #C77B55</div>
              <div className="color-chip" style={{ backgroundColor: '#F1EBDD', color: '#383A32', border: '1px solid #ddd' }}>Creme #F1EBDD</div>
              <div className="color-chip" style={{ backgroundColor: '#383A32', color: '#fff' }}>Grafite #383A32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
