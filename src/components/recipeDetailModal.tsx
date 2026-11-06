import React, { useEffect } from 'react';
import { X, Clock, ChefHat, Users, Bookmark, Sparkles, Wine, ShieldCheck, ExternalLink } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (recipe) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div className="modal-eyebrow">
            Sugestão de {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'} · 29 de Março · Sábado
          </div>
          <div className="modal-header-actions">
            <button
              className={`modal-save-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => onToggleSave(recipe)}
            >
              <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} style={{ marginRight: 6 }} />
              <span>{isSaved ? 'Salva nos Favoritos' : 'Guardar Receita'}</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Fechar receita">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-scroll-content">
          <div className="modal-recipe-header">
            <div className="modal-season-callout">
              <Sparkles size={15} style={{ marginRight: 6 }} />
              <span>A {recipe.highlightSeasonalIngredient.toLowerCase()} chega ao auge da doçura nas primeiras semanas do outono.</span>
            </div>

            <h1 className="modal-recipe-title serif">{recipe.title}</h1>
            <p className="modal-recipe-lead">{recipe.subtitle}</p>

            <div className="modal-stats-card">
              <div className="stat-block">
                <span className="stat-label">TEMPO DE PREPARO</span>
                <span className="stat-val">{recipe.prepTimeMinutes} min</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">TEMPO DE FOGO</span>
                <span className="stat-val">{recipe.cookTimeMinutes} min</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">TEMPO TOTAL</span>
                <span className="stat-val">
                  <Clock size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </span>
              </div>
              <div className="stat-block">
                <span className="stat-label">DIFICULDADE</span>
                <span className="stat-val">
                  <ChefHat size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.difficulty}
                </span>
              </div>
              <div className="stat-block">
                <span className="stat-label">RENDIMENTO</span>
                <span className="stat-val">
                  <Users size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.servings} porções
                </span>
              </div>
            </div>
          </div>

          <div className="modal-photo-hero">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="modal-full-photo"
            />
            <div className="modal-photo-credit">
              <span>Foto por </span>
              {recipe.imageCredit.authorUrl ? (
                <a
                  href={recipe.imageCredit.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-author-link"
                >
                  {recipe.imageCredit.author}
                </a>
              ) : (
                <strong>{recipe.imageCredit.author}</strong>
              )}
            </div>
          </div>

          <div className="modal-two-columns">
            <div className="ingredients-col">
              <h3 className="column-title serif">Ingredientes da Feira</h3>
              <p className="ingredients-note">
                Priorize compras em feiras livres de produtores e cooperativas locais.
              </p>

              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className={`ingredient-item ${ing.seasonal ? 'is-seasonal' : ''}`}>
                    <span className="ingredient-qty">{ing.amount}</span>
                    <span className="ingredient-name">
                      {ing.name}
                      {ing.seasonal && <span className="seasonal-dot" title="Ingrediente em plena safra"> (da safra)</span>}
                    </span>
                  </li>
                ))}
              </ul>

              {recipe.suggestedPairing && (
                <div className="pairing-box">
                  <div className="pairing-header">
                    <Wine size={16} style={{ marginRight: 6 }} />
                    <span className="pairing-title">Harmonização Sugerida</span>
                  </div>
                  <p className="pairing-body">{recipe.suggestedPairing}</p>
                </div>
              )}
            </div>

            <div className="instructions-col">
              <h3 className="column-title serif">Modo de Fazer</h3>
              <div className="steps-list">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="step-row">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-text">{step}</div>
                  </div>
                ))}
              </div>

              {recipe.chefTip && (
                <div className="chef-tip-box">
                  <div className="chef-tip-title">Segredo de Cozinha</div>
                  <p className="chef-tip-content">{recipe.chefTip}</p>
                </div>
              )}

              <div className="transparency-box">
                <div className="transparency-title">
                  <ShieldCheck size={16} style={{ marginRight: 6 }} />
                  Transparência de Fotografia Real & Licenciamento
                </div>
                <p className="transparency-text">
                  Esta imagem é uma fotografia real de alimentos capturada por{' '}
                  <strong>{recipe.imageCredit.author}</strong> via {recipe.imageCredit.source}. Em conformidade com o manifesto do projeto, nenhuma imagem deste site é gerada sinteticamente ou por inteligência artificial.
                </p>
                {recipe.imageCredit.originalUrl && (
                  <a
                    href={recipe.imageCredit.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transparency-link"
                  >
                    <span>Conferir imagem original na fonte</span>
                    <ExternalLink size={12} style={{ marginLeft: 4 }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
