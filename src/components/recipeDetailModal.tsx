import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipe: Recipe) => void;
  onPrint: (recipe: Recipe) => void;
}

export function RecipeDetailModal({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
  onPrint,
}: RecipeDetailModalProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (recipe) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setCopied(false);
      try {
        const stored = sessionStorage.getItem(`broto_brasa_checked_${recipe.id}`);
        setChecked(stored ? JSON.parse(stored) : {});
      } catch {
        setChecked({});
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [recipe, onClose]);

  const toggleChecked = (idx: number) => {
    setChecked((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      if (recipe) {
        try {
          sessionStorage.setItem(`broto_brasa_checked_${recipe.id}`, JSON.stringify(next));
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  if (!recipe) return null;

  const copyList = () => {
    const lines = recipe.ingredients.map((ing) => `• ${ing.amount} ${ing.name}`);
    const text = `${recipe.title}\n\nLista da feira:\n${lines.join('\n')}`;
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div className="modal-eyebrow">
            {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'}
            {recipe.biome ? ` · ${recipe.biome}` : ''}
            {' · '}
            {recipe.highlightSeasonalIngredient}
          </div>
          <div className="modal-header-actions">
            <button
              type="button"
              className="save-text-btn"
              onClick={() => onToggleSave(recipe)}
            >
                {isSaved ? 'No caderno' : 'Guardar no caderno'}
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Fechar receita">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-scroll-content">
          <h1 className="modal-recipe-title serif">{recipe.title}</h1>
          <p className="modal-recipe-lead">{recipe.subtitle}</p>

          <p className="time-rule modal-time">
            <span>Preparo: {recipe.prepTimeMinutes} min</span>
            <span className="time-rule-bar" aria-hidden="true" />
            <span>Fogo: {recipe.cookTimeMinutes} min</span>
            <span className="time-rule-bar" aria-hidden="true" />
            <span>Total: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
            <span className="time-rule-bar" aria-hidden="true" />
            <span>{recipe.servings} porções</span>
          </p>

          <figure className="modal-photo-hero">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="modal-full-photo"
            />
            <figcaption className="modal-photo-credit">
              — Fotografia por{' '}
              <a
                href={recipe.imageCredit.authorUrl || recipe.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-author-link"
              >
                {recipe.imageCredit.author}
              </a>
            </figcaption>
          </figure>

          <div className="modal-two-columns">
            <div className="ingredients-col">
              <h3 className="column-title serif">Da feira</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>
                    <label className={`ingredient-item ${checked[idx] ? 'is-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={Boolean(checked[idx])}
                        onChange={() => toggleChecked(idx)}
                      />
                      <span className="ingredient-qty">{ing.amount}</span>
                      <span className="ingredient-name">{ing.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn-text" onClick={copyList}>
                {copied ? 'Lista copiada. Cole no bloco de notas.' : 'Copiar lista para a feira'}
              </button>

              {recipe.suggestedPairing && (
                <aside className="margin-note">
                  <p className="margin-note-label">À mesa</p>
                  <p>{recipe.suggestedPairing}</p>
                </aside>
              )}
            </div>

            <div className="instructions-col">
              <h3 className="column-title serif">Modo de fazer</h3>
              <ol className="steps-list">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="step-row">
                    <span className="step-number" aria-hidden="true">{idx + 1}</span>
                    <p className="step-text">{step}</p>
                  </li>
                ))}
              </ol>

              {recipe.chefTip && (
                <aside className="margin-note">
                  <p className="margin-note-label">Dica do fogo</p>
                  <p>{recipe.chefTip}</p>
                </aside>
              )}

              <button type="button" className="btn-text print-recipe-btn" onClick={() => onPrint(recipe)}>
                Imprimir receita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
