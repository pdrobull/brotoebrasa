import { useEffect } from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
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
          <span className="modal-eyebrow">Origem</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </div>

        <div className="modal-scroll-content about-content">
          <img
            src={`${import.meta.env.BASE_URL}logo.webp`}
            alt=""
            className="brand-seal about-seal"
          />
          <h2 className="about-title serif">De onde vem o que vai à mesa</h2>
          <p className="about-lead">
            Broto & Brasa nasce da feira. Duas panelas por dia: o que chegou fresco de manhã e o que o apetite pede ao cair da tarde. Se a banca trouxe caju maduro e bertalha da chuva de ontem, é isso que vai ao fogo.
          </p>

          <h3 className="about-subtitle serif">Bancada</h3>
          <ul className="origin-list">
            <li>
              <strong>A terra dita o cardápio.</strong> Safra no ápice: mais doce, mais barato, menos desperdício.
            </li>
            <li>
              <strong>Biomas vivos.</strong> Mandioca do Norte, pinhão das araucárias, pequi do Cerrado, peixe da costa.
            </li>
            <li>
              <strong>Uma boca de fogão.</strong> Panela de fundo grosso, feira da esquina, sem aditivo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
