import type { Recipe } from '../types';

interface DailyPairProps {
  lunchRecipe: Recipe;
  dinnerRecipe: Recipe;
  onSelectRecipe: (recipe: Recipe) => void;
  savedRecipeIds: string[];
  onToggleSave: (recipe: Recipe) => void;
}

function TimeRule({ prep, cook }: { prep: number; cook: number }) {
  return (
    <p className="time-rule">
      <span>{prep} min de bancada</span>
      <span className="time-rule-bar" aria-hidden="true" />
      <span>{cook} min de fogo</span>
    </p>
  );
}

export function DailyPair({
  lunchRecipe,
  dinnerRecipe,
  onSelectRecipe,
  savedRecipeIds,
  onToggleSave,
}: DailyPairProps) {
  const lunchSaved = savedRecipeIds.includes(lunchRecipe.id);
  const dinnerSaved = savedRecipeIds.includes(dinnerRecipe.id);

  return (
    <section id="receitas-do-dia" className="daily-pair-section">
      <div className="section-bar">
        <h2 className="section-headline serif">Hoje na mesa</h2>
        <a href="#arquivo-culinario" className="section-link">
          Diário da cozinha
        </a>
      </div>

      <div className="daily-asymmetric">
        <article className="feature-lunch">
          <figure className="feature-photo">
            <img src={lunchRecipe.imageUrl} alt={lunchRecipe.title} decoding="async" />
            <figcaption>
              — Fotografia por {lunchRecipe.imageCredit.author}
            </figcaption>
          </figure>
          <div className="feature-body">
            <p className="card-meal-kicker">
              Almoço · 12h{lunchRecipe.biome ? ` · ${lunchRecipe.biome}` : ''}
            </p>
            <h2 className="feature-title serif">
              <button type="button" onClick={() => onSelectRecipe(lunchRecipe)}>
                {lunchRecipe.title}
              </button>
            </h2>
            <p className="feature-lead">{lunchRecipe.subtitle}</p>
            <TimeRule prep={lunchRecipe.prepTimeMinutes} cook={lunchRecipe.cookTimeMinutes} />
            <p className="pan-note">Uma panela · {lunchRecipe.difficulty}</p>
            <div className="feature-actions">
              <button type="button" className="btn-text" onClick={() => onSelectRecipe(lunchRecipe)}>
                Abrir receita
              </button>
              <button type="button" className="save-text-btn" onClick={() => onToggleSave(lunchRecipe)}>
                {lunchSaved ? 'No caderno' : 'Guardar no caderno'}
              </button>
            </div>
          </div>
        </article>

        <article className="feature-dinner">
          <p className="card-meal-kicker">
            Jantar · 19h{dinnerRecipe.biome ? ` · ${dinnerRecipe.biome}` : ''}
          </p>
          <figure className="dinner-photo">
            <img src={dinnerRecipe.imageUrl} alt={dinnerRecipe.title} loading="lazy" decoding="async" />
          </figure>
          <h3 className="dinner-title serif">
            <button type="button" onClick={() => onSelectRecipe(dinnerRecipe)}>
              {dinnerRecipe.title}
            </button>
          </h3>
          <TimeRule prep={dinnerRecipe.prepTimeMinutes} cook={dinnerRecipe.cookTimeMinutes} />
          <div className="feature-actions">
            <button type="button" className="btn-text" onClick={() => onSelectRecipe(dinnerRecipe)}>
              Abrir receita
            </button>
            <button type="button" className="save-text-btn" onClick={() => onToggleSave(dinnerRecipe)}>
                {dinnerSaved ? 'No caderno' : 'Guardar no caderno'}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
