import React from 'react';
import { Clock, ChefHat, Users, Bookmark, ArrowRight, Sun, Moon } from 'lucide-react';
import { Recipe } from '../types';

interface DailyPairProps {
  lunchRecipe: Recipe;
  dinnerRecipe: Recipe;
  onSelectRecipe: (recipe: Recipe) => void;
  savedRecipeIds: string[];
  onToggleSave: (recipe: Recipe) => void;
}

export const DailyPair: React.FC<DailyPairProps> = ({
  lunchRecipe,
  dinnerRecipe,
  onSelectRecipe,
  savedRecipeIds,
  onToggleSave,
}) => {
  const renderCard = (recipe: Recipe, type: 'lunch' | 'dinner') => {
    const isSaved = savedRecipeIds.includes(recipe.id);
    const isLunch = type === 'lunch';

    return (
      <article className={`daily-recipe-card ${isLunch ? 'card-lunch' : 'card-dinner'}`}>
        <div className="card-photo-container">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="card-photo"
            loading="lazy"
          />
          <div className="meal-tag-pill">
            {isLunch ? (
              <>
                <Sun size={14} className="meal-icon" />
                <span>Sugestão de Almoço</span>
              </>
            ) : (
              <>
                <Moon size={14} className="meal-icon" />
                <span>Sugestão de Jantar</span>
              </>
            )}
          </div>

          <div className="photo-credit-discreet">
            Foto por{' '}
            {recipe.imageCredit.authorUrl ? (
              <a
                href={recipe.imageCredit.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="author-link"
              >
                {recipe.imageCredit.author}
              </a>
            ) : (
              <span className="author-name">{recipe.imageCredit.author}</span>
            )}
          </div>

          <button
            className={`save-bookmark-btn ${isSaved ? 'saved' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(recipe);
            }}
            title={isSaved ? 'Remover dos favoritos' : 'Guardar receita'}
            aria-label={isSaved ? 'Remover dos favoritos' : 'Guardar receita'}
          >
            <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="card-body">
          <div className="card-seasonal-eyebrow">
            Em evidência: <strong>{recipe.highlightSeasonalIngredient}</strong>
          </div>

          <h2 className="card-title serif" onClick={() => onSelectRecipe(recipe)}>
            {recipe.title}
          </h2>

          <p className="card-subtitle">
            {recipe.subtitle}
          </p>

          <div className="card-specs">
            <div className="spec-item" title="Tempo total estimado">
              <Clock size={15} />
              <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
            </div>
            <div className="spec-item" title="Dificuldade">
              <ChefHat size={15} />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="spec-item" title="Rendimento">
              <Users size={15} />
              <span>{recipe.servings} porções</span>
            </div>
          </div>

          <div className="card-tags-row">
            {recipe.tags.map(tag => (
              <span key={tag} className="recipe-tag">{tag}</span>
            ))}
          </div>

          <div className="card-footer-action">
            <button
              className="btn-read-recipe"
              onClick={() => onSelectRecipe(recipe)}
            >
              <span>Ler receita completa</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="receitas-do-dia" className="daily-pair-section">
      <div className="section-header-editorial">
        <span className="section-eyebrow">A Curadoria de Hoje</span>
        <h2 className="section-headline serif">Duas Sugestões do Dia</h2>
        <p className="section-subtext">
          Um almoço vibrante e um jantar reconfortante. Ambas as receitas pensadas para dialogar com a safra corrente e preparações descomplicadas na cozinha de casa.
        </p>
      </div>

      <div className="daily-grid-duo">
        {renderCard(lunchRecipe, 'lunch')}
        {renderCard(dinnerRecipe, 'dinner')}
      </div>
    </section>
  );
};
