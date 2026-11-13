import type { Recipe, Season } from '../types';

interface HeroSeasonProps {
  currentSeason: Season;
  lunchRecipe: Recipe;
  dinnerRecipe: Recipe;
  harvestNames: string[];
  onExploreToday: () => void;
}

const seasonCopy: Record<Season, { kicker: string; title: string; lead: string; label: string }> = {
  outono: {
    kicker: 'Março · raízes e folhas escuras',
    title: 'Março é tempo de raízes firmes e folhas escuras.',
    lead: 'Hoje a feira trouxe cabotiá doce e peixe fresco da costa. O almoço pede panela de barro; a noite pede frigideira quente.',
    label: 'Outono',
  },
  inverno: {
    kicker: 'Junho · caldeirão e brasa',
    title: 'Inverno pede caldo, canjiquinha e fogo baixo.',
    lead: 'Pinhão, cará e couve. O almoço é uma panela só; o jantar, o que sobrou no fogo.',
    label: 'Inverno',
  },
  primavera: {
    kicker: 'Setembro · ervas e primeiros frutos',
    title: 'A primavera chega em broto, erva e caju fresco.',
    lead: 'Caju, pequi, bertalha. Panelas rápidas, folha verde, pouco fogo.',
    label: 'Primavera',
  },
  verao: {
    kicker: 'Dezembro · costa e pomar',
    title: 'Verão de peixe, manga e panela rápida.',
    lead: 'Quiabo, milho verde, maracujá. Almoço de maxixe; jantar de peixe na brasa.',
    label: 'Verão',
  },
};

export function HeroSeason({
  currentSeason,
  lunchRecipe,
  dinnerRecipe,
  harvestNames,
  onExploreToday,
}: HeroSeasonProps) {
  const copy = seasonCopy[currentSeason];
  const fireMins = lunchRecipe.cookTimeMinutes + dinnerRecipe.cookTimeMinutes;
  const biomes = [lunchRecipe.biome, dinnerRecipe.biome]
    .filter((value, index, list): value is string => Boolean(value) && list.indexOf(value) === index)
    .join(' · ');

  return (
    <section className="hero-editorial">
      <div className="hero-copy">
        <p className="hero-kicker">{copy.kicker}</p>
        <h1 className="hero-quote serif">{copy.title}</h1>
        <p className="hero-lead">{copy.lead}</p>
        <button type="button" className="btn-text" onClick={onExploreToday}>
          Ir para as panelas de hoje
        </button>
      </div>

      <aside className="hero-edition-board">
        <p className="edition-board-title">Edição de {copy.label}</p>
        <div className="edition-board-row">
          <strong>Almoço, 12h</strong>
          <span>{lunchRecipe.title}</span>
        </div>
        <div className="edition-board-row">
          <strong>Jantar, 19h</strong>
          <span>{dinnerRecipe.title}</span>
        </div>
        {harvestNames.length > 0 && (
          <div className="edition-board-row">
            <strong>Safra</strong>
            <span>{harvestNames.join(', ')}</span>
          </div>
        )}
        <div className="edition-board-row">
          <strong>Fogo no dia</strong>
          <span>{fireMins} min</span>
        </div>
        {biomes && (
          <div className="edition-board-row">
            <strong>Bioma</strong>
            <span>{biomes}</span>
          </div>
        )}
      </aside>
    </section>
  );
}
