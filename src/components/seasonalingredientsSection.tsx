import type { SeasonalIngredient } from '../types';

interface SeasonalIngredientsSectionProps {
  ingredients: SeasonalIngredient[];
  onSelectIngredientRecipe: (recipeId: string) => void;
}

export function SeasonalIngredientsSection({
  ingredients,
  onSelectIngredientRecipe,
}: SeasonalIngredientsSectionProps) {
  return (
    <section id="ingredientes-da-estacao" className="seasonal-ingredients-section">
      <div className="section-bar">
        <h2 className="section-headline serif">Herbário da safra</h2>
      </div>
      <p className="section-subtext">
        Nome, família, pico. O que merece lugar na feira desta semana.
      </p>

      {ingredients.length === 0 ? (
        <p className="section-subtext">
          Edições desta estação em curadoria. Navegue pelas outras safras no topo.
        </p>
      ) : (
        <div className="herbal-list">
          {ingredients.map((item) => (
            <article key={item.id} className="herbal-entry">
              <figure className="herbal-photo">
                <img src={item.imageUrl} alt="" loading="lazy" decoding="async" />
              </figure>
              <div className="herbal-body">
                <h3 className="herbal-name serif">{item.name}</h3>
                {item.scientificOrFamily && (
                  <p className="herbal-latin">{item.scientificOrFamily}</p>
                )}
                <p className="herbal-meta">Pico: {item.peakPeriod}</p>
                {item.shortHarvest && (
                  <p className="herbal-flash">Safra relâmpago: poucas semanas</p>
                )}
                <p className="herbal-desc">{item.description}</p>
                {item.occurrence && (
                  <p className="herbal-occur">{item.occurrence}</p>
                )}
                {item.marketTip && (
                  <p className="herbal-tip">Na banca: {item.marketTip}</p>
                )}
                {item.recipeIds[0] && (
                  <button
                    type="button"
                    className="btn-text"
                    onClick={() => onSelectIngredientRecipe(item.recipeIds[0])}
                  >
                    Receita com este ingrediente
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
