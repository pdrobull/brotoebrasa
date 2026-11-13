import type { Recipe } from '../types';
import { formatRecipeDate } from '../seasons';

interface KitchenArchiveSectionProps {
  pastRecipes: Recipe[];
  savedRecipeIds: string[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export function KitchenArchiveSection({
  pastRecipes,
  savedRecipeIds,
  onSelectRecipe,
}: KitchenArchiveSectionProps) {
  return (
    <section id="arquivo-culinario" className="archive-section">
      <div className="section-bar">
        <h2 className="section-headline serif">Diário da cozinha</h2>
      </div>

      {pastRecipes.length === 0 ? (
        <p className="section-subtext">Nada neste recorte. Tente outra busca ou outra estação.</p>
      ) : (
        <>
          <div className="archive-list">
            {pastRecipes.map((recipe) => (
              <button
                key={recipe.id}
                type="button"
                className="archive-row-item"
                onClick={() => onSelectRecipe(recipe)}
                aria-label={`Abrir receita completa de ${recipe.title}`}
              >
                <img
                  src={recipe.imageUrl}
                  alt=""
                  className="archive-thumb"
                  loading="lazy"
                  decoding="async"
                />
                <div className="archive-info-col">
                  <span className="archive-meal-kicker">
                    {formatRecipeDate(recipe.datePublished)} · {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'}
                    {recipe.biome ? ` · ${recipe.biome}` : ''}
                  </span>
                  <h3 className="archive-title serif">{recipe.title}</h3>
                  <p className="archive-sub">{recipe.subtitle}</p>
                  {savedRecipeIds.includes(recipe.id) && (
                    <p className="archive-saved">No caderno</p>
                  )}
                </div>
                <span className="archive-time">
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </span>
                <span className="archive-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <p className="archive-end">
            — Fim das edições registradas para esta safra. O fogo acende novamente amanhã. —
          </p>
        </>
      )}
    </section>
  );
}
