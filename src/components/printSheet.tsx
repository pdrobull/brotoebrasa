import type { Recipe } from '../types';
import { capitalizePtDate } from '../seasons';

interface PrintSheetProps {
  recipes: Recipe[];
}

const logoSrc = `${import.meta.env.BASE_URL}logo.webp`;

function PrintRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <article className="print-recipe">
      <p className="print-recipe-kicker">
        {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'}
        {recipe.biome ? ` · ${recipe.biome}` : ''}
        {' · '}
        {recipe.highlightSeasonalIngredient}
      </p>
      <h2 className="print-recipe-title serif">{recipe.title}</h2>
      <p className="print-recipe-lead">{recipe.subtitle}</p>
      <p className="print-recipe-time">
        Preparo {recipe.prepTimeMinutes} min · Fogo {recipe.cookTimeMinutes} min · Total{' '}
        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
      </p>

      <div className="print-recipe-grid">
        <section>
          <h3 className="print-col-title serif">Da feira</h3>
          <ul className="print-ingredients">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>
                <span className="print-qty">{ing.amount}</span>
                <span>{ing.name}</span>
              </li>
            ))}
          </ul>
          {recipe.suggestedPairing && (
            <p className="print-note">
              <em>À mesa.</em> {recipe.suggestedPairing}
            </p>
          )}
        </section>
        <section>
          <h3 className="print-col-title serif">Modo de fazer</h3>
          <ol className="print-steps">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
          {recipe.chefTip && (
            <p className="print-note">
              <em>Dica do fogo.</em> {recipe.chefTip}
            </p>
          )}
        </section>
      </div>
    </article>
  );
}

export function PrintSheet({ recipes }: PrintSheetProps) {
  if (recipes.length === 0) return null;

  const today = capitalizePtDate(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );
  const isMenu = recipes.length > 1;

  return (
    <div className="print-sheet">
      <header className="print-masthead">
        <img src={logoSrc} alt="" className="print-logo" />
        <div>
          <p className="print-brand serif">Broto & Brasa</p>
          <p className="print-kicker">
            {isMenu ? `Caderno · ${recipes.length} receitas` : 'Receita'}
            {' · '}
            {today}
          </p>
        </div>
      </header>
      {recipes.map((recipe) => (
        <PrintRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
