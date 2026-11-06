import React from 'react';
import { Calendar, Leaf, Sparkles, ArrowDown } from 'lucide-react';
import { Season } from '../types';

interface HeroSeasonProps {
  currentSeason: Season;
  onExploreSeason: () => void;
}

export const HeroSeason: React.FC<HeroSeasonProps> = ({ currentSeason, onExploreSeason }) => {
  const seasonDetails: Record<Season, {
    title: string;
    subtitle: string;
    editorialQuote: string;
    safraHighlights: string[];
    period: string;
    atmosphere: string;
  }> = {
    outono: {
      title: 'Outono em Chão Brasileiro',
      subtitle: 'Tempo de colher abóboras macias, raízes vigorosas e folhas escuras da terra.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Abóbora Cabotiá', 'Mandioca Mansa', 'Alho-Poró Caipira', 'Taioba', 'Pinhão do Sul'],
      period: '20 de Março a 21 de Junho',
      atmosphere: 'Dias mais límpidos, manhãs frescas e o convite natural a panelas de cozimento lento e aromas envolventes.'
    },
    inverno: {
      title: 'Inverno & Caldeirões',
      subtitle: 'Caldos substanciosos, canjiquinhas, queijos maturados e conforto ao redor do fogo.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Inhame', 'Agrião d’água', 'Batata-Doce Roxa', 'Couve-Manteiga', 'Pinhão'],
      period: '21 de Junho a 22 de Setembro',
      atmosphere: 'Ar puro da serra, brasa acesa e receitas que alimentam o corpo e aquecem as conversas.'
    },
    primavera: {
      title: 'Primavera dos Pomares',
      subtitle: 'Ervas frescas, brotos crocantes, peixes leves e a doçura dos primeiros frutos tropicais.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Jabuticaba', 'Caju Fresco', 'Aspargos', 'Ervilhas-Tortas', 'Manjericão'],
      period: '22 de Setembro a 21 de Dezembro',
      atmosphere: 'Luz dourada prolongada, frescor vegetal e celebração da vitalidade dos quintais brasileiros.'
    },
    verao: {
      title: 'Verão de Sol e Costa',
      subtitle: 'Pratos leves, pescados com limão galego, mangas perfumadas e cozimentos rápidos de beira-mar.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Manga Palmer', 'Milho Verde', 'Maracujá da Caatinga', 'Quiabo Novo', 'Coentro Selvagem'],
      period: '21 de Dezembro a 20 de Março',
      atmosphere: 'Cores vibrantes, mesa ao ar livre e celebração de ingredientes suculentos e refrescantes.'
    }
  };

  const details = seasonDetails[currentSeason];

  return (
    <section className="hero-editorial">
      <div className="hero-editorial-container">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="hero-kicker-dot"></span>
            <span className="hero-season-name">Edição de {details.period}</span>
          </div>

          <h1 className="hero-quote serif">
            {details.editorialQuote}
          </h1>

          <p className="hero-lead">
            Duas ideias pensadas para cozinhar bem hoje. Sem fórmulas industriais, valorizando a agricultura familiar e a generosidade da safra brasileira.
          </p>

          <div className="safra-chips-wrapper">
            <span className="safra-label">
              <Leaf size={14} style={{ marginRight: 6 }} />
              Destaques da safra agora:
            </span>
            <div className="safra-chips">
              {details.safraHighlights.map((item) => (
                <span key={item} className="safra-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a href="#receitas-do-dia" className="btn-primary">
              Ver receitas de hoje
              <ArrowDown size={16} style={{ marginLeft: 8 }} />
            </a>
            <button className="btn-secondary" onClick={onExploreSeason}>
              <Sparkles size={16} style={{ marginRight: 6 }} />
              Conhecer os ingredientes
            </button>
          </div>
        </div>

        <div className="hero-aside-card">
          <div className="aside-card-inner">
            <span className="card-rubric">Caderno Editorial</span>
            <h3 className="aside-title serif">{details.title}</h3>
            <p className="aside-atmosphere">{details.atmosphere}</p>
            <div className="aside-meta">
              <div className="meta-item">
                <Calendar size={14} />
                <span>Ciclo atual no calendário agrícola</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
